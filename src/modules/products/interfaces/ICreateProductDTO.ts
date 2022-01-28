interface ICreateProductDTO {
  name: string;
  price: string;
  category?: string[];
  description?: string;
  images?: string[];
}

export { ICreateProductDTO };
