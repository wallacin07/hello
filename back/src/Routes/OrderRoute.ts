import express from 'express'

import OrderController from '../Controllers/OrderController.ts';

const route = express.Router();

route.post('/', OrderController.registerOrder)
route.get('/', OrderController.getOrders)

export default route;