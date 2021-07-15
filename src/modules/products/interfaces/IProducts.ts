interface ISavedProductDocument {
  id?: string;
  name: string;
  price: number;
  category?: string;
  images?: string[];
  nameSearch?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  currentPage: number;
  totalPages: number;
}

interface IUpdateProductDocument {
  id?: string;
  name?: string;
  price?: number;
  category?: string;
  images?: string[];
  nameSearch?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IPagination {
  page: number;
  limit: number;
  skip: number;
}

export { ISavedProductDocument, IUpdateProductDocument, IPagination };
