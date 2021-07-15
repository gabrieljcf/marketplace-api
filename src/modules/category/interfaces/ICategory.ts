interface ISaveCategoryDocument {
  id?: string;
  name: string;
  nameSearch?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ICategoryFilters {
  nameSearch: string;
  isActive: boolean;
}

export { ISaveCategoryDocument, ICategoryFilters };
