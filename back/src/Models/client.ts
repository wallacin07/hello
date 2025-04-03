import mongoose, { Schema, Document } from 'mongoose';


interface IClient extends Document {
    name: string;
    email: string;
    number : number;
    adress : string;
}

const ClientSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    adress: { type: String, required: true },
});

const Client = mongoose.model<IClient>('Client', ClientSchema);

export default Client;