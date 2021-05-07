import {
    GET_SHIPPING_METHODS
} from '../actions/types';
import { IShippingMethods, IStateShippingMethodsPropertiesReducer } from '../types/utils';

interface IAction {
    type: string;
    payload: IShippingMethods[]
}

const intitialState: IStateShippingMethodsPropertiesReducer = {
    shipping_methods: [],
};

export default function (state = intitialState, action: IAction) {
    switch (action.type) {
        case GET_SHIPPING_METHODS:
            return {
                ...state,
                shipping_methods: action.payload
            }
        default:
            return state;
    }
}