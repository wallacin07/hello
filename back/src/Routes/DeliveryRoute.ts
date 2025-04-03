import express from 'express'

import DeliveryController from '../Controllers/DeliveryController.ts';

const route = express.Router();

route.post('/', DeliveryController.registerDelivery)
route.get('/:id', DeliveryController.getDeliveryById)
route.put('/:id/status', DeliveryController.updateStatus)

export default route;