import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ISellOrderArgs, IStateSellOrdersReducer } from '../types/utils';
import { SellOrderCard } from './SellOrderCard';

interface IParamsDetail {
    id: string;
}

export const SellOrderDetail = () => {
    const params: IParamsDetail = useParams();
    const { id } = params;
    const sellOrdersReducer = useSelector((state: IStateSellOrdersReducer) => state.sellOrdersReducer);
    const { sell_orders } = sellOrdersReducer;
    if(!sell_orders){
        return null;
    }
    const sellOrder: ISellOrderArgs | undefined = sell_orders.find(i => i.internalOrder === id);
    if(!sellOrder){
        return null;
    }
    return (
        <SellOrderCard
            sellOrder={sellOrder}
        />
    );
}

export default SellOrderDetail;
