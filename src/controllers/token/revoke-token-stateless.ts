import { asyncWrapper, send } from "@everlast-brands/error-handling";
import { Request } from "express";

const validation = [];
const verification = [];

async function action(req: Request, res) {
  send({ res });
}

const createTokenStateless = [
  ...verification,
  ...validation,
  asyncWrapper(action),
];
