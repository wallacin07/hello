import express, { Request, Response, Router } from "express";
import Carrier from "../Models/carrier.ts";
import CarrierService from "../Services/CarrierService.ts";
import DeliveryService from "../Services/DeliveryService.ts";

class CarrierController {
   static registerCarrier = async (req : Request, res: Response): Promise<any> =>
   {
        const {name, cnpj, type_transport } = req.body
        const newCarrier = CarrierService.registerCarrier(name,cnpj,type_transport)
        if(!newCarrier){
          return res.status(500).send({ message: "Something failed" });
         }
         return res
                .status(201)
                .send({ message: "Entrega cadastrado com sucesso" });

   }

   static getDeliveries = async (req : Request, res : Response) : Promise<any> => 
   {
      const {id} = req.params
      const deliveries = DeliveryService.getDeliversByCarrier(id)
      return res
      .status(200)
      .send({ deliveries });
   }
}

export default CarrierController