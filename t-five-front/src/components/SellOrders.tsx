import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeollOrders, getShippingmethods } from '../actions/SellOrderActions';
import { IStateSellOrdersReducer } from '../types/utils';
import { EnhancedTable, IHeadCell } from './EnhancedTable';
import { Link } from 'react-router-dom';

export const SellOrders = () => {
    const dispatch = useDispatch();
    const sellOrdersReducer = useSelector((state: IStateSellOrdersReducer) => state.sellOrdersReducer );
    const { sell_orders, getAll } = sellOrdersReducer;

    useEffect(() => {
        if(!getAll){
            dispatch(getSeollOrders());
            dispatch(getShippingmethods());
        }
    }, []);
    if(!sell_orders){
        return null;
    }
    const headCells: IHeadCell[] = [
        { label: 'Número de orden de venta', },
        { label: 'Vendedor de tienda' },
        { label: 'Fecha de creación' },
        { label: 'Método de envío' },
        { label: 'Detalle de orden' }
    ];
    const dataItems = sell_orders.map((item, _i) => {
        return (
            <TableRow
                hover={true}
                tabIndex={-1}
                key={`table-sell-orders_${item.internalOrder}`}
            >
                <TableCell>{item.internalOrder || ''}</TableCell>
                <TableCell>{item.sellerStore || ''}</TableCell>
                <TableCell>{item.creationDate || ''}</TableCell>
                <TableCell>{item.shippingMethod || ''}</TableCell>
                <TableCell>
                    <Link to={`/sell-order/${item.internalOrder || ''}`} 
                        className="btn btn-primary mr-2">
                        Detalle
                    </Link>
                </TableCell>
            </TableRow>
        );
    });
    return (
        <Fragment>
            <Link to={'/sell-order/new'} className="btn btn-primary mr-2" style={{marginBottom: '5px'}}>
                Crear
            </Link>
            <EnhancedTable
                dataItems={dataItems}
                headCells={headCells}
            />
        </Fragment>
    );
}

export default SellOrders;
