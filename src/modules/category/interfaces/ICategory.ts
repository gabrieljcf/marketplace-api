import { Document } from "mongoose";

interface ISaveCategoryDocument {
  id?: string;
  name: string;
  nameSearch?: string;
  isActive?: boolean;
  isActiveInHomePage?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IResponseCategories {
  categories: (ISaveCategoryDocument & Document<any, any>)[];
  currentPage: number;
  totalPages: number;
}

interface ICategoryFilters {
  nameSearch?: RegExp;
  isActive?: boolean;
  isActiveInHomePage?: boolean;
}

export { ISaveCategoryDocument, ICategoryFilters, IResponseCategories };
