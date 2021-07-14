import express from "express";
import "express-async-errors";
import "reflect-metadata";
import "./shared/container";

import exceptionErrorHandling from "./middlewares/exceptionErrorHandling";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);
app.use(exceptionErrorHandling);

app.listen(3333, () => console.log("Server start on PORT 3333"));
