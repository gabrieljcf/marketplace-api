import { ICreateProductDTO } from "../../interfaces/ICreateProductDTO";
import { ISavedProductDocument } from "../../interfaces/ISavedProductDocument";
import { Product } from "../../models/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductRepository implements IProductsRepository {
  public async list(): Promise<ISavedProductDocument[] | undefined> {
    const products = await Product.find();

    return products;
  }

  public async findById(
    id: string
  ): Promise<ISavedProductDocument | undefined> {
    const product = await Product.findById(id).exec();
    return product;
  }

  public async create(productData: ICreateProductDTO): Promise<void> {
    const product = new Product(productData);
    await product.save();
  }

  public async update(
    id: string,
    productData: ISavedProductDocument
  ): Promise<void> {
    await Product.findByIdAndUpdate(id, productData);
  }

  public async delete(id: string): Promise<void> {
    await Product.findByIdAndDelete(id);
  }
}
export { ProductRepository };
