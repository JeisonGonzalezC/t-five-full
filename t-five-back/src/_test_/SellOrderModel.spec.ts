import SellOrderModel from "../models/SellOrderModel";
import fs from 'fs';
import config from "../config/config";

const data = {
    sellerStore: "A",
    shippingMethod: "b",
    externalOrder: 4,
    buyerFullName: "b",
    buyerPhone: 3,
    buyerEmail: "5",
    shippingAddress: "g",
    shippingCity: "g",
    shippingRegion: "g",
    shippingCountry: "g",
    lineItems: [
        {
            productName: "d",
            productQty: 3,
            productWeight: 20
        },
        {
            productName: "d",
            productQty: 3,
            productWeight: 22
        }
    ]
}

describe('Sell orders functions', () => {
    it('Function sell orders save', async() => {
        const order = await SellOrderModel.saveOrderApi(data);
        if('error' in order){
            expect(order).not.toBeNull();
            expect(order).toBeDefined();
            expect(order.status).toBe(404);
        }else{
            expect(order).not.toBeNull();
            expect(order).toBeDefined();
        }
       await SellOrderModel.clearBd();
    });
});
