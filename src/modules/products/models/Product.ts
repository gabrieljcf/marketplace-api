import mongoose from "mongoose";

import { ISavedProductDocument } from "../interfaces/ISavedProductDocument";
import { productSchema } from "../schemas/productSchema";

const Product = mongoose.model<ISavedProductDocument>("Product", productSchema);

export { Product };
