import express, { Request, Response, Router } from "express";

import Product from "../Models/product.ts";
import ProductService from "../Services/ProductsService.ts";




class ProductController {
   static registerProduct = async (req : Request, res: Response): Promise<any> =>
   {
        const {name, price, stock } = req.body
        const newProduct = ProductService.registerProduct(name,price,stock)
        if(!newProduct){
          return res.status(500).send({ message: "Something failed" });
         }
         return res
                .status(201)
                .send({ message: "Entrega cadastrado com sucesso" });

   }

   static getProducts = async (req : Request, res : Response) : Promise<any> => 
   {
    try {
        const all = await ProductService.getProducts();
        return res
          .status(201)
          .send({ all });
      } catch (error) {
        return res.status(500).send({ message: "Something failed" + error });
      }
   }
}

export default ProductController