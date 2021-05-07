import { Request, Response } from 'express';
import SellOrderModel from '../models/SellOrderModel';

import { ISellOrderArgs } from '../types/sellOrder';

class SellOrderController {
    public async index(_req: Request, res: Response) {
        const sellOrders = await SellOrderModel.getAllSellOrders();
        const status = 'error' in sellOrders ? sellOrders.status : 201;
        res.status(status).json(sellOrders);
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params;
        const sellOrder = await SellOrderModel.getSellOrderById(id);
        const status = 'error' in sellOrder ? sellOrder.status : 201;
        res.status(status).json(sellOrder);
    }
    
    public async store(req: Request, res: Response) {
        const sellOrders = await SellOrderModel.saveOrderApi(req.body as ISellOrderArgs);
        const status = 'error' in sellOrders ? sellOrders.status : 201;
        res.status(status).json(sellOrders);
    }

    public async shippingmethods(_req: Request, res: Response) {
        const shippingmethodsApi = await SellOrderModel.shippingmethods();
        const status = 'error' in shippingmethodsApi ? shippingmethodsApi.status : 201;
        res.status(status).json(shippingmethodsApi);
    }
}
export const sellOrderController = new SellOrderController();