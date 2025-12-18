import { IBaseRepository } from "../ repositories/interfaces/base.repo.interface";

export class BaseRepository<T> implements IBaseRepository<T> {
  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  async findOne(filter: Partial<T>): Promise<T | null> {
    return this.model.findOne(filter);
  }

  async findAll(filter: Partial<T> = {}): Promise<T[]> {
    return this.model.find(filter);
  }

  async create(data: Partial<T>): Promise<T> {
    const doc = new this.model(data);
    return await doc.save();
  }

  async update(email: string, data: Partial<T>): Promise<T | null> {
    return this.model.findOneAndUpdate(email, data, { new: true });
  }

  async delete(email: string): Promise<void> {
    await this.model.findOneAndDelete(email);
  }
}
