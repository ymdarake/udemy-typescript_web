export class Attributes<T> {
  constructor(private data: T) {}

  // NOTE: https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066982#overview
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
