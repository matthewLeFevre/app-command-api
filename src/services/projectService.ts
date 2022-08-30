import { Table } from "rectifyjs";
import Service from "../utilities/service";
import fetch from "node-fetch";

export interface ProjectCreate {
  userId: string;
  users: string[];
  services: Service[];
  description?: string;
  name: string;
  logoUrl?: string;
}

export default class ProjectService extends Service {
  constructor(table: Table) {
    super(table);
  }
}
