import {
    GET_ORDERS,
    SAVE_ORDER
} from '../actions/types';
import { ISellOrderArgs, IStateSellOrdersPropertiesReducer } from '../types/utils';

interface IAction {
    type: string;
    payload: ISellOrderArgs | ISellOrderArgs[]
}

const intitialState: IStateSellOrdersPropertiesReducer = {
    sell_orders: [],
    getAll: false
};

export default function (state = intitialState, action: IAction) {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                sell_orders: action.payload,
                getAll: true
            }
        case SAVE_ORDER:
            return {
                ...state,
                sell_orders:[...state.sell_orders , action.payload]
            }    
        default:
            return state;
    }
}