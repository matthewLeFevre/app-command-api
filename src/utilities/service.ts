import { Table } from "rectifyjs";

export default class Service {
  table: Table;
  constructor(table: Table) {
    this.table = table;
  }
  async create(data) {
    const id = await this.table.create(data);
    return { id };
  }
  async update<T>(id, data: T): Promise<Boolean> {
    await this.table.updateWithId(id, data);
    return true;
  }
  async delete(id) {
    await this.table.deleteWithId(id);
    return true;
  }
  async get<T>(id: string) {
    const res: T = await this.table.getWithId(id);
    return res;
  }
  async getAll() {
    const all = await this.table.getAll();
    return all;
  }
}
