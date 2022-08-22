import AuthCommandSDK from "@auth-command/auth-command-sdk";
import { Table } from "rectifyjs";
import Service from "../utilities/service";

export default class UserService extends Service {
  auth: AuthCommandSDK;
  constructor(table: Table, auth: AuthCommandSDK) {
    super(table);
    this.auth = auth;
  }
}
