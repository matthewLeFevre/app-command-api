import { asyncWrapper, send } from "@everlast-brands/error-handling";
import { Request } from "express";
import validationCheck from "../../middleware/validationCheck";

const validation = [validationCheck];
const verification = [];

async function action(req: Request, res) {
  send({ res });
}

const createProjectPublic = [
  ...verification,
  ...validation,
  asyncWrapper(action),
];

export default createProjectPublic;
