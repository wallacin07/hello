import mongoose, { Schema, Document } from 'mongoose';


interface IOrder extends Document {
    idClient: string;
    products: string[]
    status : string;
}

const OrderSchema: Schema = new Schema({
    idClient: { type: Schema.Types.ObjectId, required: true, ref: "Client"},
    products: [{type: Schema.Types.ObjectId, ref: "Product", required: true}],
    status: { type: String, required: true },
});

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;