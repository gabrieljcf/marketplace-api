import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICreateProductDTO } from "../../interfaces/ICreateProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ImportProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  private loadProducts(
    file: Express.Multer.File
  ): Promise<ICreateProductDTO[]> {
    return new Promise((resolve, reject) => {
      const products: ICreateProductDTO[] = [];
      const parseFile = csvParse();

      const stream = fs.createReadStream(file.path);
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, price] = line;
          products.push({
            name,
            price,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(products);
        })
        .on("error", (error) => reject(error));
    });
  }

  public async execute(file: Express.Multer.File): Promise<void> {
    const products = await this.loadProducts(file);
    products.map(async (product) => {
      await this.repository.create(product);
    });
  }
}

export { ImportProductsUseCase };
