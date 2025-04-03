import express, { Request, Response, Router } from "express";
import OrderService from "../Services/OrderService.ts";




class OrderController {
   static registerOrder = async (req : Request, res: Response): Promise<any> =>
   {
        const {idClient, products, status } = req.body
        const newOrder = OrderService.registerOrder(idClient,products,status)
            return res
              .status(201)
              .send({ message: newOrder });

   }

   static getOrders = async (req : Request, res: Response) : Promise<any> => {
      const {status} = req.query;
      const ordersClient = OrderService.getOrderByStatus(status);
      return res
          .status(200)
          .send({ ordersClient });
   }
}



export default OrderController