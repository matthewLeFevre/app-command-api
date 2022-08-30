import { send } from "@everlast-brands/error-handling";
import { Request } from "express";
import { body } from "express-validator";
import validationCheck from "../../middleware/validationCheck";

const validation = [
  body("email").exists(),
  body("password").exists(),
  validationCheck,
];

async function action(req: Request, res) {
  const user = await req.services.user.authenticate(
    req.body.email,
    req.body.password
  );

  send({ res });
}
