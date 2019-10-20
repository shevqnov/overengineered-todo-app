export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface Todos {
  [id: string]: Todo
}

export interface TodoState {
  todos: Todos
  todoIds: string[]
}
