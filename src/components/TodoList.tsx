import * as React from 'react'
import { Todo, View } from '../store/todo/types'
import TodoComponent from './Todo'

export interface StateProps {
  todoList: Todo[]
  currentView: View
}

export interface DispatchProps {
  checkTodo: (id: string) => void
}

export interface OwnProps {}

const TodoList: React.FC<StateProps & OwnProps & DispatchProps> = ({todoList, checkTodo}) => {

  return(
    <div>
      <h3>Todo List</h3>
      <ul>
        {todoList.map(todo => (
          <TodoComponent key={todo.id} {...todo} checkTodo={checkTodo} />
          ))}
      </ul>
    </div>
  )
}

export default TodoList