import { ParsedQs } from "qs";
import Order from "../Models/orders.ts";
import Product from "../Models/product.ts";
import ProductService from "./ProductsService.ts";

class OrderService {

    static registerOrder = async  (idClient: string, products: string[], status: string) =>
        {
            const newOrder = new Order({
                idClient,
                products,
                status
            })
            products.forEach(async p => {
                    const product = await Product.findById(p)
                    if ((product?.stock  == undefined) || (product?.stock <= 0)) {
                        return "deu errado"
                    }
                });

            await newOrder.save();
            return "deu certo"
        }

    static getOrderByClientId = async  (id : string) =>
        {
            const orders = await Order.find({idClient : id})  
            return orders
        }

        static getOrderByStatus = async  (status : string | ParsedQs | (string | ParsedQs)[] | undefined) =>
            {
                const orders = await Order.find({status : status})  
                return orders
            }
}

export default OrderService ;