import {
    GET_ORDERS,
    SAVE_ORDER,
    GET_SHIPPING_METHODS
} from './types';
import axios from 'axios';
import { Dispatch } from 'redux';
import config from '../config';
import { ISellOrderArgs } from '../types/utils';

export const getSeollOrders = () => async (dispatch: Dispatch) => {
    const response = await axios.get(`${config.PATH}/sell-order`)
    dispatch({
        type: GET_ORDERS,
        payload: response.data
    })
}

export const saveSellOrder = (args: ISellOrderArgs) => async (dispatch: Dispatch) => {
    const response = await axios.post(`${config.PATH}/sell-order`, args)
    dispatch({
        type: SAVE_ORDER,
        payload: response.data
    })
}

export const getShippingmethods = () => async (dispatch: Dispatch) => {
    const response = await axios.get(`${config.PATH}/sell-order/shipping-methods`)
    dispatch({
        type: GET_SHIPPING_METHODS,
        payload: response.data
    })
}