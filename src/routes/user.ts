import { send } from "@everlast-brands/error-handling";
import { Request, Router } from "express";

const UserRouter = Router();

UserRouter.get("/", () => {});
UserRouter.post("/", (req: Request, res) => {
  send({ res });
});

export default UserRouter;
