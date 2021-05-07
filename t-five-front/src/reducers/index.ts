import {combineReducers} from 'redux';
import sellOrdersReducer from './sellOrdersReducer';
import shippingMethodsReducer from './shippingMethodsReducer';

export default combineReducers({
    sellOrdersReducer,
    shippingMethodsReducer
});