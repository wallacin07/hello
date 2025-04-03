import express from 'express'

import CarrierController from '../Controllers/CarrierController.ts';

const route = express.Router();

route.post('/', CarrierController.registerCarrier)
route.post("/:id/deliveries", CarrierController.getDeliveries)

export default route;