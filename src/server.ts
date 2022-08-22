import express from "express";
import cors from "cors";

import Rectify from "rectifyjs";
import UserService from "./services/userService";
import UserRouter from "./routes/user";
import AuthCommandSDK from "@app-command/auth-sdk";

export default function createServer(DB: Rectify) {
  const auth = new AuthCommandSDK({
    enviornment: <string>process.env.AUTH_CMD_ENV,
    appAPIKey: <string>process.env.ADMIN_APP_KEY,
    appId: <string>process.env.ADMIN_APP_ID,
  });

  const app = express();
  app.use(cors());

  // Performs the same task that body parser does
  app.use(express.json());
  app.use((req, res, next) => {
    const user = new UserService(DB.tables.users, auth);
    req.services = {
      user,
    };
    next();
  });

  // App routes
  app.use("/users", UserRouter);

  return app;
}
