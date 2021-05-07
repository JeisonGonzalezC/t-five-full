import { IError } from '../types/error/error';
import { ERROR_SELL_ORDER } from '../types/constants/constants';
import fs from 'fs';
import { ISellOrderArgs, IShippingMethods } from '../types/sellOrder';
import config from '../config/config';
import { getShippingmethods } from '../lib/melonn_api';

export default class SellOrderModel {
    public static async getAllSellOrders(){
        let sellOrders: ISellOrderArgs[] | undefined;
        try {
            const jsonString = fs.readFileSync(config.PATH_DB)
            sellOrders = JSON.parse(jsonString.toString())
        } catch(err) {
            console.error(err)
        }
        if(!sellOrders){
            return {
                error: true,
                message: ERROR_SELL_ORDER.SELL_ORDERS_ERROR,
                status: 404
            }
        }
        return sellOrders;
    }

    public static async getSellOrderById(id: string):Promise<ISellOrderArgs | IError>{
        let sellOrders: ISellOrderArgs[] | undefined;
        let sellOrder: ISellOrderArgs | undefined;
        try {
            const jsonString = fs.readFileSync(config.PATH_DB)
            sellOrders = JSON.parse(jsonString.toString())
            sellOrder = sellOrders?.find(i => i.internalOrder === id);
        } catch(err) {
            console.error(err)
        }
        if(!sellOrders || !sellOrder){
            return {
                error: true,
                message: `${ERROR_SELL_ORDER.SELL_ORDER_ERROR} ${id}`,
                status: 404
            }
        }
        return sellOrder;
    }

    public static async saveOrderApi(args: ISellOrderArgs):Promise<ISellOrderArgs | IError>{
        const sellOrders = await SellOrderModel.getAllSellOrders();
        if('error' in sellOrders){
            return {
                error: true,
                message: ERROR_SELL_ORDER.SELL_ORDERS_ERROR,
                status: 404
            }
        }
        const data = {
            ...args,
            creationDate: new Date(),
            internalOrder: `${new Date().getTime()}-${Math.floor(Math.random() * 100)}`
        }
        fs.writeFile (config.PATH_DB, JSON.stringify([...sellOrders, data]), function(err) {
            if (err){
                console.error(err);
            }
        });
        return data;
    }

    public static async shippingmethods():Promise<IShippingMethods[] | IError>{
        const shippingmethods = await getShippingmethods();
        if(!shippingmethods){
            return {
                error: true,
                message: ERROR_SELL_ORDER.SHIPPING_METHODS_ORDERS_ERROR,
                status: 404
            }
        }
        return shippingmethods;
    }

    public static async clearBd(){
        await fs.unlinkSync(config.PATH_DB)
        const createStream = fs.createWriteStream(config.PATH_DB);
        await createStream.end();
        fs.writeFile (config.PATH_DB, JSON.stringify([]), function(err) {
            if (err){
                console.error(err);
            }
        });
    }
}