import mongoose, { Schema, Document } from 'mongoose';


interface IDelivery extends Document {
    idOrder: string;
    idCarrier: string;
    status : string;
}

const DeliverySchema: Schema = new Schema({
    idOrder: { type: Schema.Types.ObjectId, required: true, ref: "Order" },
    idCarrier: { type: Schema.Types.ObjectId, required: true, ref: "Carrier" },
    status: { type: String, required: true },
});

const Delivery = mongoose.model<IDelivery>('Delivery', DeliverySchema);

export default Delivery;