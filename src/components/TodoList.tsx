import * as React from 'react'
import { Todo } from '../store/todo/types'
import TodoComponent from './Todo'

export interface StateProps {
  todoList: Todo[]
}

export interface DispatchProps {
  toggleTodo: (id: string) => void
}

export interface OwnProps {}

const TodoList: React.FC<StateProps & OwnProps & DispatchProps> = ({todoList, toggleTodo}) => {

  return(
    <div>
      <h3>Todo List</h3>
      <ul>
        {todoList.map(todo => (
          <TodoComponent key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
      </ul>
    </div>
  )
}

export default TodoList