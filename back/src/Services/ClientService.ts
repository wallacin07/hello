import Client from "../Models/client.ts";

class ClientService {
    static registerClient = async  (name: string, email: string, adress: string, number: number) =>
        {
            const newClient = new Client({
                name,
                email,
                number,
                adress
              });
                 try {
                     await newClient.save();
                        return true;
                   } catch (error) {
                     return false;
                   }
        }

        static deleteClient = (id: string) => {
            const client = Client.findById(id)
            //    await Client.findByIdAndDelete(id)
        }
}



export default ClientService ;
