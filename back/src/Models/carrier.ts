import mongoose, { Schema, Document } from 'mongoose';


interface ICarrier extends Document {
    name: string;
    cnpj: string;
    type_transport : string;
}

const CarrierSchema: Schema = new Schema({
    name: { type: String, required: true },
    cnpj: { type: String, required: true },
    type_transport: { type: String, required: true },
});

const Carrier = mongoose.model<ICarrier>('Carrier', CarrierSchema);

export default Carrier;