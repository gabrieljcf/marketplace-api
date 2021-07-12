import { Router } from "express";

import { categoryRouter } from "./category.routes";
import { productRoutes } from "./product.routes";

const routes = Router();
routes.use("/products", productRoutes);
routes.use("/categories", categoryRouter);

export { routes };
