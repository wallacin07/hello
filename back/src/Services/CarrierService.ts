import Carrier from "../Models/carrier.ts";
import Order from "../Models/orders.ts";

class CarrierService {
    static registerCarrier = async  (name: string, cnpj: string, type_transport: string) =>
        {
         const newCarrier = new Carrier({
                     name,
                     cnpj,
                     type_transport
                 })
                 try {
                     await newCarrier.save();
                        return true;
                   } catch (error) {
                     return false;
                   }
        }
}

export default CarrierService ;