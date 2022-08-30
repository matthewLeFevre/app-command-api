import { asyncWrapper, send } from "@everlast-brands/error-handling";
import { Request } from "express";
import { body } from "express-validator";
import validationCheck from "../../middleware/validationCheck";
import { AppUserType } from "@app-command/types";

const validation = [
  body("email").exists(),
  body("password").exists(),
  body("phone").optional(),
  body("name").optional(),
  validationCheck,
];

async function action(req: Request, res) {
  await req.services.user.create({
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    name: req.body.name,
    type: AppUserType.Basic,
    privileges: [],
  });
  send({ res, message: "Request successful. Please Sign in." });
}

const createUserPublic = [...validation, asyncWrapper(action)];

export default createUserPublic;
