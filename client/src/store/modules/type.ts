type Nullable<T> = T | null;

export interface IAction {
  type: string;
  payload: any;
}

export interface ITodo {
  id: string;
  create_at: number;
  update_at: Nullable<number>;
  isDone: boolean;
  title: string;
}
