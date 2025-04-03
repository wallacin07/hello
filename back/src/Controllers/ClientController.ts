import express, { Request, Response, Router } from "express";
import Client from "../Models/client.ts";
import ClientService from "../Services/ClientService.ts";
import OrderService from "../Services/OrderService.ts";




class ClientController {
   static registerClient = async (req : Request, res: Response): Promise<any> =>
   {
        const {name, email, number, adress } = req.body
        const newClient = ClientService.registerClient(name,email,number,adress)

        if(!newClient){
          return res.status(500).send({ message: "Something failed" });
         }
         return res
                .status(201)
                .send({ message: "Entrega cadastrado com sucesso" });
   }

   static deleteClient = async (req : Request, res : Response) : Promise<any> => 
   {
      const {id} = req.params

      const client = Client.findById(id)
      
      try {
         await Client.findByIdAndDelete(id)
         return res
           .status(201)
           .send({ message: "Cliente Deletado com sucesso" });
       } catch (error) {
         return res.status(500).send({ message: "Something failed" + error });
       }
   }

   static getOrdersClient = async (req : Request, res : Response) : Promise<any> =>
  {
    const {id} = req.params
    const orders = OrderService.getOrderByClientId(id)
    return res.status(200).send({orders})
  }
}

export default ClientController