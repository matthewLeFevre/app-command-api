import express from "express";
import ExampleRouter from "./routes/user";
import cors from "cors";
import AuthCommandSDK from "@auth-command/auth-command-sdk";
import Rectify from "rectifyjs";
import UserService from "./services/userService";
import UserRouter from "./routes/user";

export default function createServer(DB: Rectify) {
  const auth = new AuthCommandSDK({
    path: <string>process.env.AUTH_CMD_ENV,
    appAPIKey: <string>process.env.ADMIN_APP_KEY,
    appID: <string>process.env.ADMIN_APP_ID,
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
