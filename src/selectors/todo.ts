import { AppState } from "../store";
import { Todo } from "../store/todo/types";
import { View } from "../store/visibilityFilter/types";

export const todoListSelector = (state: AppState): Todo[] => {
  const { todos, todoIds } = state.todo
  const todoList = todoIds.map(id => ({ ...todos[id] }))
  switch(state.visibilityFilter){
    case View.Completed:
      return todoList.filter(todo => todo.completed)
    case View.Uncompleted:
      return todoList.filter(todo => !todo.completed)
    default: return todoList
  }
}