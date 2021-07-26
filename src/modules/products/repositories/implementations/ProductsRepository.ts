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
  ): Promise<ISavedProductDocument | ISavedProductDocument[] | []> {
    const products = await Product.aggregate([
      {
        $match: {
          ...filters,
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          name: true,
          images: true,
          price: true,
          "category.name": true,
        },
      },
    ])
      .skip(skip)
      .limit(limit)
      .collation({ locale: "en" })
      .sort({ name: 1 })
      .exec();

    const count = await Product.find(filters).countDocuments();
    const totalPages = Math.ceil(count / limit);

    const productsData = {
      ...products,
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

  public async delete(id: string): Promise<void> {
    await Product.findByIdAndDelete(id);
  }
}
export { ProductsRepository };
