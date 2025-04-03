import Delivery from "../Models/orders.ts";

class DeliveryService {
    static registerDelivery = async  (idOrder: string, idCarrier: string, status: string) =>
        {
            const newDelivery = new Delivery({
                idOrder,
                idCarrier,
                status
            })
                 try {
                     await newDelivery.save();
                        return true;
                   } catch (error) {
                     return false;
                   }
        }

        static getDeliversByCarrier = async  (idCarrier: string) =>
        {
            const deliverys = await Delivery.find({idCarrier : idCarrier}) 
            return deliverys
        }

        static getDeliverById = async(id: string) =>
        {
            const delivery = await Delivery.findById(id)
            return delivery
        }

        static updateDelivery = async(id: string, status: string) =>
        {
            const delivery = await Delivery.findByIdAndUpdate(id,{status : status})
            return delivery
        }
}

export default DeliveryService ;