import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/category/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/category/repositories/implementations/CategoriesRepository";
import { ProductsRepository } from "../../modules/products/repositories/implementations/ProductsRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
