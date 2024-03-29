import cors from "cors";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import "./shared/container";

import exceptionErrorHandling from "./middlewares/exceptionErrorHandling";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(exceptionErrorHandling);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(PORT, () => console.log("Server start on PORT 3333"));
