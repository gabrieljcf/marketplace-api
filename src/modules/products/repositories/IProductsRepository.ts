import { ICreateProductDTO } from "../interfaces/ICreateProductDTO";
import { IFilters } from "../interfaces/IFilters";
import {
  ISavedProductDocument,
  IUpdateProductDocument,
} from "../interfaces/IProducts";

interface IProductsRepository {
  list(filters: IFilters): Promise<ISavedProductDocument[] | undefined>;
  findById(id: string): Promise<ISavedProductDocument | undefined>;
  create(productData: ICreateProductDTO): Promise<void>;
  update(
    id: string,
    productData: IUpdateProductDocument | string
  ): Promise<IUpdateProductDocument>;
  delete(id: string): Promise<void>;
}

export { IProductsRepository };
