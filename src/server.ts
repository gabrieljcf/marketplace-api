import express from "express";
import "reflect-metadata";
import "./shared/container";

import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server start on PORT 3333"));
