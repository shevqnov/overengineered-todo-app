import { TodoState, View } from './types';
import { getType, Reducer, ActionType } from 'typesafe-actions';
import * as actions from "./actions";

const initialState: TodoState = {
  todos: {},
  todoIds: [],
  currentView: View.All
}

export type TodoActions = ActionType<typeof actions>

const reducer: Reducer<TodoState, TodoActions> = (state = initialState, action) => {
  switch (action.type) {
    
    case getType(actions.addTodo):
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload
        },
        todoIds: [
          ...state.todoIds,
          action.payload.id
        ]
      }
    case getType(actions.checkTodo):
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload]: {
            ...state.todos[action.payload],
            completed: true
          }
        }
      }
    default: return {
      ...state
    }
  }
}

export default reducer