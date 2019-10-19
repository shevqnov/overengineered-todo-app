import { createStandardAction as fsa } from 'typesafe-actions'
import { Todo } from './types'

export const addTodo = fsa('todo/add')<Todo>()
export const checkTodo = fsa('todo/check')<string>()