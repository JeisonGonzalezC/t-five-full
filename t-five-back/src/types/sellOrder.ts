export interface IShippingMethods {
    id: number;
    name: string;
    description?: string;
    code?: string;
    shipping_type?: string;
    rules?: IRulesShippingMethods;
}

interface IRulesShippingMethods {
    availability?: {
        byWeight?: {
            min?: number;
            max?: number;
        },
        byRequestTime?: {
            dayType?: string;
            fromTimeOfDay?: number;
            toTimeOfDay?: number;
        },
        byWarehouseCoverage?: {
            type?: string;
        }
    },
    promisesParameters?: {
        cases?: IPromisesShippingMethod[];
    }
}

interface IPromisesShippingMethod {
    priority?: number;
    condition?: {
        byRequestTime?: {
            dayType?: string;
            fromTimeOfDay?: number;
            toTimeOfDay?: number;
        }
    },
    packPromise?: {
        min?: {
            type?: string;
            deltaHours?: number;
        },
        max?: {
            type?: string;
            deltaHours?: number;
        }
    },
    shipPromise?: {
        min?: {
            type?: string;
        },
        max?: {
            type?: string;
        }
    },
    deliveryPromise?: {
        min?: {
            type?: string;
        },
        max?: {
            type?: string;
        }
    },
    readyPickUpPromise?: {
        min?: {
            type?: string;
            deltaHours?: number;
        },
        max?: {
            type?: string;
            deltaHours?: number;
        }
    }
}

export interface ISellOrderArgs {
    sellerStore: string;
    shippingMethod: string;
    externalOrder: number;
    buyerFullName: string;
    buyerPhone: number;
    buyerEmail: string;
    shippingAddress: string;
    shippingCity: string;
    shippingRegion: string;
    shippingCountry: string;
    lineItems: IProduct[];
    // BACKEND CALC
    creationDate?: Date;
    internalOrder?: string;
    pack_promise_min?: string | null;
    pack_promise_max?: string | null;
    ship_promise_min?: string | null;
    delivery_promise_min?: string | null;
    delivery_promise_max?: string | null;
    ready_pickup_promise_min?: string | null;
    ready_pickup_promise_max?: string | null;
}

interface IProduct {
    productName: string;
    productQty: number;
    productWeight: number;
}