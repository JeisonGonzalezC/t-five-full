import { Router } from 'express';
import { sellOrderController } from '../controllers/SellOrderController';

class RestaurantsRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/' ,sellOrderController.index);
        this.router.get('/shipping-methods' ,sellOrderController.shippingmethods);
        this.router.get('/:id' , sellOrderController.show);
        this.router.post('/' , sellOrderController.store);
    }
}
const restaurantsRoutes = new RestaurantsRoutes();
export default restaurantsRoutes.router;