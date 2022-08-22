import UserService from "../../src/services/userService";

declare global {
  namespace Express {
    interface Request {
      services: {
        user: UserService;
      };
    }
  }
}
