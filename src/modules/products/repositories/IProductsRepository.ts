import { IPagination } from "../../../shared/interfaces/IPagination";
import { ICreateProductDTO } from "../interfaces/ICreateProductDTO";
import { IFilters } from "../interfaces/IFilters";
import {
  IProductsResponse,
  ISavedProductDocument,
  IUpdateProductDocument,
} from "../interfaces/IProducts";

interface IProductsRepository {
  list(filters: IFilters, pagination: IPagination): Promise<IProductsResponse>;

  findById(id: string): Promise<ISavedProductDocument | undefined>;

  create(productData: ICreateProductDTO): Promise<void>;

  update(
    id: string,
    productData: IUpdateProductDocument | string
  ): Promise<IUpdateProductDocument>;

  updateMany(
    id: string,
    productData: IUpdateProductDocument | string
  ): Promise<IUpdateProductDocument>;

  delete(id: string): Promise<void>;
}

export { IProductsRepository };
