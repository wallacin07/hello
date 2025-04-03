import express from 'express'
import ProductController from '../Controllers/ProductsController.ts';

const route = express.Router();

route.post('/', ProductController.registerProduct)
route.get('/', ProductController.getProducts)

export default route;