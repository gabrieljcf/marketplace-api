import { ICreateProductDTO } from "../../interfaces/ICreateProductDTO";
import { IFilters } from "../../interfaces/IFilters";
import {
  ISavedProductDocument,
  IUpdateProductDocument,
} from "../../interfaces/IProducts";
import { Product } from "../../models/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepository implements IProductsRepository {
  public async list(
    filters: IFilters
  ): Promise<ISavedProductDocument[] | undefined> {
    const products = await Product.find(filters);

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
    productData: IUpdateProductDocument
  ): Promise<IUpdateProductDocument> {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        $set: productData,
      },
      { new: true }
    );
    return product;
  }

  public async delete(id: string): Promise<void> {
    await Product.findByIdAndDelete(id);
  }
}
export { ProductsRepository };
