import "reflect-metadata";
import { ProductsRepositoryInMemory } from "../../modules/products/repositories/imMemory/ProductsRepositorynMemory";
import { ListProductsUseCase } from "../../modules/products/usecases/listProducts/ListProductsUseCase";

let listProductsUseCase: ListProductsUseCase;
let listProductsRepositoryInMemory: ProductsRepositoryInMemory;
describe("List product use case", () => {
  beforeEach(() => {
    listProductsRepositoryInMemory = new ProductsRepositoryInMemory();
    listProductsUseCase = new ListProductsUseCase(
      listProductsRepositoryInMemory
    );
  });

  it("should be able to list products", async () => {
    const { products } = await listProductsUseCase.execute({});
    expect(products[0]).toHaveProperty("name");
    expect(products[0].id).toBe("1");
    expect(products[0].price).toBe(2);
    expect(products[0].name).toBe("Teste");
  });
});
