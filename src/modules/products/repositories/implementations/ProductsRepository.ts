import { IPagination } from "../../../../shared/interfaces/IPagination";
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
    filters: IFilters,
    { page, limit, skip }: IPagination
  ): Promise<any> {
    const products = await Product.aggregate([
      {
        $match: {
          ...filters,
        },
      },
      {
        $project: {
          name: true,
          images: true,
          price: true,
        },
      },
      { $sort: { name: 1 } },
    ])
      .skip(skip)
      .limit(limit)
      .collation({ locale: "en" })
      .exec();

    const count = await Product.find(filters).countDocuments();
    const totalPages = Math.ceil(count / limit);

    const productsData = {
      products: [...products],
      currentPage: page,
      totalPages,
    };

    return productsData;
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

  public async updateMany(
    id: string,
    category: IUpdateProductDocument
  ): Promise<IUpdateProductDocument> {
    const product = await Product.findOneAndUpdate(
      { _id: id },
      { $push: { category: { $each: category } } },
      { new: true }
    );
    return product;
  }

  public async delete(id: string): Promise<void> {
    await Product.findByIdAndDelete(id);
  }
}
export { ProductsRepository };
