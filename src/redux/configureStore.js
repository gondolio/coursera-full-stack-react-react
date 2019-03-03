import { createStore, combineReducers } from 'redux';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { DISHES } from '../shared/dishes';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            dishes: Dishes,
            leaders: Leaders,
            promotions: Promotions,
        }),
    );

    return store;
}