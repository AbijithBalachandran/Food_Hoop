
export interface IBaseRepository<T> {
  
  findById(id: string): Promise<T | null>;


  findOne(filter: Partial<T>): Promise<T | null>;

  findAll(filter?: Partial<T>): Promise<T[]>;

  create(data: Partial<T>): Promise<T>;

  update(email: string, data: Partial<T>): Promise<T | null>;

  delete(email: string): Promise<void>;
}
