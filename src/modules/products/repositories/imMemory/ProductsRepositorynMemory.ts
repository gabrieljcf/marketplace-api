import { IPagination } from "../../../../shared/interfaces/IPagination";
import { ICreateProductDTO } from "../../interfaces/ICreateProductDTO";
import { IFilters } from "../../interfaces/IFilters";
import {
  IProductsResponse,
  ISavedProductDocument,
  IUpdateProductDocument,
} from "../../interfaces/IProducts";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepositoryInMemory implements IProductsRepository {
  async list(
    filters: IFilters,
    pagination: IPagination
  ): Promise<IProductsResponse> {
    return {
      products: [
        {
          id: "1",
          name: "Teste",
          price: 2,
        },
      ],
      currentPage: 1,
      totalPages: 1,
    };
  }
  findById(id: string): Promise<ISavedProductDocument> {
    throw new Error("Method not implemented.");
  }
  create(productData: ICreateProductDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(
    id: string,
    productData: string | IUpdateProductDocument
  ): Promise<IUpdateProductDocument> {
    throw new Error("Method not implemented.");
  }
  updateMany(
    id: string,
    productData: string | IUpdateProductDocument
  ): Promise<IUpdateProductDocument> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
