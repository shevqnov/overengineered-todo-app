import { TodoState } from './types';
import { getType, Reducer, ActionType } from 'typesafe-actions';
import * as actions from "./actions";

const initialState: TodoState = {
  todos: {},
  todoIds: [],
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
    case getType(actions.toggleTodo):
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload]: {
            ...state.todos[action.payload],
            completed: !state.todos[action.payload].completed
          }
        }
      }

    case getType(actions.removeTodo): {
      const {payload : id} = action
      const {todos} = {...state} 
      delete todos[id]
      return {
        ...state,
        todos,
        todoIds: state.todoIds.filter(todoId => todoId !== id)
      }
    }
    default: return {
      ...state
    }
  }
}

export default reducer