import { Request } from "express";
import extractToken from "../utilities/extractToken";

export default async function verifyApp(req: Request, res, next) {
  try {
    const token = extractToken(req.headers);
  } catch (err) {}
  next();
}
