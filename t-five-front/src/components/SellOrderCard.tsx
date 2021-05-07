import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ISellOrderArgs } from '../types/utils';

type ISellCardProps = {
    sellOrder: ISellOrderArgs;
}

export const SellOrderCard: React.FunctionComponent<ISellCardProps> = (props) => {
    const { sellOrder } = props;
    const itemsProducts = sellOrder.lineItems && sellOrder.lineItems.map((item, i) => {
        return(
            <div key={i}>
                <hr/>
                <Typography variant="body2" component="p">
                    Product name: {item.productName}
                </Typography>
                <Typography variant="body2" component="p">
                    Product Qty: {item.productQty}
                </Typography>
                <Typography variant="body2" component="p">
                    Product weight: {item.productWeight}
                </Typography>
                <hr/>
            </div>
        );
    });
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Order Number: {sellOrder.internalOrder}
                </Typography>
                <Typography color="textSecondary">
                    Buyer full name: {sellOrder.buyerFullName}
                </Typography>
                <Typography variant="body2" component="p">
                    Buyer full number: {sellOrder.buyerPhone}
                </Typography>
                <Typography variant="body2" component="p">
                    Buyer email: {sellOrder.buyerEmail}
                </Typography>
                <Typography variant="body2" component="p">
                    Shipping address: {sellOrder.shippingAddress}
                </Typography>
                <Typography variant="body2" component="p">
                    Shipping city: {sellOrder.shippingCity}
                </Typography>
                <Typography variant="body2" component="p">
                    Shipping region: {sellOrder.shippingRegion}
                </Typography>
                <Typography variant="body2" component="p">
                    Shipping country: {sellOrder.shippingCountry}
                </Typography>
                {itemsProducts}
            </CardContent>
        </Card> 
    );
}