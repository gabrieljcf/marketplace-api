import mongoose from "mongoose";

import { ISavedProductDocument } from "../interfaces/IProducts";
import { productSchema } from "../schemas/productSchema";

const Product = mongoose.model<ISavedProductDocument>("Product", productSchema);

export { Product };
