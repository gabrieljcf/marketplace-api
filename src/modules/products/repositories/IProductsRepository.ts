import { ICreateProductDTO } from "../interfaces/ICreateProductDTO";
import { ISavedProductDocument } from "../interfaces/ISavedProductDocument";

interface IProductsRepository {
  list(): Promise<ISavedProductDocument[] | undefined>;
  findById(id: string): Promise<ISavedProductDocument | undefined>;
  create(productData: ICreateProductDTO): Promise<void>;
  update(id: string, productData: ISavedProductDocument): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IProductsRepository };
