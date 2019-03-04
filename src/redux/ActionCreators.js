import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        author: author,
        comment: comment,
        dishId: dishId,
        rating: rating,
    }
});

// Thunk lets us return a function instead of an action
// This can be useful for more complex actions, such as in fetchDishes below
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000); // Simulating an async server call
};

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
})

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess,
});