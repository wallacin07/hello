import express from 'express'
import ClientController from '../Controllers/ClientController.ts';

const route = express.Router();

route.post('/', ClientController.registerClient)
route.get('/:id/orders', ClientController.getOrdersClient)
route.delete('/:id', ClientController.deleteClient)

export default route;