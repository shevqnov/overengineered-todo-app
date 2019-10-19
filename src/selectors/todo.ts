import { AppState } from "../store";
import { Todo } from "../store/todo/types";

export const todoListSelector = (state: AppState): Todo[] => {
  const { todos, todoIds } = state.todo
  return todoIds.map(id => ({ ...todos[id] }))
}