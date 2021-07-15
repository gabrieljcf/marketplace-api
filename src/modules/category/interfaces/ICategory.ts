interface ISaveCategoryDocument {
  id?: string;
  name: string;
  nameSearch?: string;
  isActive?: boolean;
  isActiveInHomePage?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ICategoryFilters {
  nameSearch?: string;
  isActive?: boolean;
  isActiveInHomePage?: boolean;
}

export { ISaveCategoryDocument, ICategoryFilters };
