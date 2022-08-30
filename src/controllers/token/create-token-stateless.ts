import { asyncWrapper, send } from "@everlast-brands/error-handling";
import { Request } from "express";
import { body, oneOf, query } from "express-validator";
import validationCheck from "../../middleware/validationCheck";

const validation = [
  query("appId").exists(),
  body("data").exists(),
  oneOf([body("time").exists(), body("date").exists()]),
  body("userId").optional(),
  body("appId").optional(),
  validationCheck,
];
const verification = [];

async function action(req: Request, res) {
  send({ res });
}

const createTokenStateless = [
  ...verification,
  ...validation,
  asyncWrapper(action),
];
