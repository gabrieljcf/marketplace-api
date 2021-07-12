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

export { ISavedProductDocument, IUpdateProductDocument };
