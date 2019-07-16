export type TodoItem = {
  id: string;
  task: string;
  done: boolean;
};

export type Todos = Array<TodoItem>;
