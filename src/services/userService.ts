import AuthCommandSDK from "@app-command/auth-sdk";
import { AppUserPrivilege, AppUserType } from "@app-command/types";
import { Table } from "rectifyjs";
import Service from "../utilities/service";

export interface UserCreate {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  type: AppUserType;
  privileges: AppUserPrivilege[];
}

export default class UserService extends Service {
  auth: AuthCommandSDK;
  constructor(table: Table, auth: AuthCommandSDK) {
    super(table);
    this.auth = auth;
  }
  async create(data: UserCreate) {
    const result = await this.auth.createUser({
      email: data.email,
      password: data.password,
      name: data?.name,
      phone: data?.phone,
    });

    await this.table.createWithId(result.data.id, {
      type: data.type,
      privileges: data.privileges,
    });

    return result.data.id;
  }

  async get(userId) {
    const identity = (await this.auth.getUserById(userId)).data;
    const appUser = await this.table.getWithId(userId);
    return { ...identity, ...appUser };
  }

  async authenticate(email, password) {
    const identity = (await this.auth.authenticate(email, password)).data;
    const appUser = await this.table.getWithId(identity.id);
    return { ...identity, ...appUser };
  }
}
