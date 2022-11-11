import "reflect-metadata";
import { AppError } from "../../errors/AppError";
import { CategoryRepositoryInMemory } from "../../modules/category/repositories/inMemory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../../modules/category/usecases/createCategory/CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoryRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      isActiveInHomePage: true,
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should be able to list all categories", async () => {
    const category = {
      name: "Category Test",
      isActiveInHomePage: true,
    };

    await createCategoryUseCase.execute(category);
    await createCategoryUseCase.execute(category);

    const categories = await categoriesRepositoryInMemory.list();
    expect(categories).toHaveLength(2);
  });

  it("should be able to find category by name", async () => {
    const category = {
      name: "category",
      isActiveInHomePage: true,
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated.name).toEqual(category.name);
  });

  it("should not be able to find category by name", () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        isActiveInHomePage: true,
      };

      await createCategoryUseCase.execute(category);
      await categoriesRepositoryInMemory.findByName("test");
    }).rejects.toBeInstanceOf(AppError);
  });
});
