import { Router } from "express";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return response.json({ message: "ok" });
});

export { usersRoutes };
