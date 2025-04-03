import express from 'express'
import LoginController from '../Controllers/LoginController.ts';
import AuthMiddleware from '../Middlewares/AuthMiddleware.ts';


const route = express.Router();

route.post('/register', AuthMiddleware.ValidateRegister, LoginController.registerUser)
route.post('/login', AuthMiddleware.ValidateLogin, LoginController.Login)

export default route;