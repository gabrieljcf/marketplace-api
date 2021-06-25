import { Document } from "mongoose";

interface ISavedProductDocument extends Document {
  id?: string;
  name: string;
  price: number;
  createdAt?: Date;
}

export { ISavedProductDocument };
