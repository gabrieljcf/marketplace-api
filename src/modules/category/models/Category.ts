import mongoose from "mongoose";

import { ISaveCategoryDocument } from "../interfaces/ICategory";
import { categorySchema } from "../schemas/categorySchema";

const Category = mongoose.model<ISaveCategoryDocument>(
  "Category",
  categorySchema
);

export { Category };
