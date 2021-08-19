import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoryRouter } from "./category.routes";
import { productRoutes } from "./product.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();
routes.use("/products", productRoutes);
routes.use("/categories", categoryRouter);
routes.use("/users", usersRoutes);
routes.use(authenticateRoutes);

export { routes };
