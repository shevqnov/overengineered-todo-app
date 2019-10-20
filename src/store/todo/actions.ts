import { createStandardAction as fsa, createAsyncAction } from 'typesafe-actions'
import { Todo } from './types'

export const addTodo = fsa('todo/add')<Todo>()
export const toggleTodo = fsa('todo/toggle')<string>()

export const fetchTodos = createAsyncAction(
  'todo/request',
  'todo/success',
  'todo/failure'
)<string, Todo[], string>()