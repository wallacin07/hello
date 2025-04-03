import { Express } from 'express';
import express from 'express'
import clientRoute from './Routes/ClientRoute.ts'
import carrierRoute from './Routes/CarrierRoute.ts'
import productRoute from './Routes/ProductRoute.ts'
import orderRoute from './Routes/OrderRoute.ts'
import deliveryRoute from './Routes/DeliveryRoute.ts'
import authRoute from './Routes/AuthRoute.ts'
export default function (app: Express) {
    app
    .use(express.json())
    .use("/", authRoute)
    .use('/costumers', clientRoute)
    .use('/carriers', carrierRoute)
    .use('/products', productRoute)
    .use('/orders', orderRoute)
    .use('/deliveries', deliveryRoute)
    }