import express, { Request, Response, Router } from "express";
import Order from "../Models/orders.ts";
import Delivery from "../Models/deliveries.ts";
import DeliveryService from "../Services/DeliveryService.ts";




class DeliveryController {
   static registerDelivery = async (req : Request, res: Response): Promise<any> =>
   {
        const {idOrder, idCarrier, status } = req.body
        const newDelivery = DeliveryService.registerDelivery(idOrder, idCarrier, status)
       if(!newDelivery){
        return res.status(500).send({ message: "Something failed" });
       }
       return res
              .status(201)
              .send({ message: "Entrega cadastrado com sucesso" });
   }
   static getDeliveryById = async (req : Request, res: Response): Promise<any> =>
  {
    const {id} = req.params
    const delivery = DeliveryService.getDeliverById(id)
      return res.status(200).send({delivery})
  }

  static updateStatus = async (req : Request, res: Response): Promise<any> =>
    {
      const {id} = req.params
      const {status} = req.body
      const delivery = DeliveryService.updateDelivery(id, status)
        return res.status(200).send({delivery})
    }

}

export default DeliveryController