
import Product from "../Models/product.ts";

class ProductService {
    static registerProduct = async  (name: string, price: number, stock: number) =>
        {
            const newProduct = new Product({
                name,
                price,
                stock
            })
                 try {
                     await newProduct.save();
                        return true;
                   } catch (error) {
                     return false;
                   }
        }

        static getProducts = async () => {
            const all = await Product.find();
            return all;
        }
}

export default ProductService ;