import express, { Request, Response, Router } from "express";
import LoginService from "../Services/LoginService.ts";



class LoginController {
   static registerUser = async (req : Request, res: Response): Promise<any> =>
   {
        const {email, password} = req.body
        const registerUser = LoginService.registerUser(email, password)
        if (!registerUser) {
            return res.status(500).send({ message: "Something failed"  });
        }
        return res
        .status(201)
        .send({ message: "Pedido cadastrado com sucesso" });
   }

   static Login = async (req : Request, res : Response) : Promise<any> => 
   {
    const {email, password} = req.body
        const Login = LoginService.login(email, password)
        return res
        .status(201)
        .send({ Login });
   }
}

export default LoginController