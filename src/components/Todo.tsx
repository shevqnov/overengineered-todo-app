import * as React from 'react'

interface Props {
  id: string
  title: string
  completed: boolean
  checkTodo: (id: string) => void
}

const Todo: React.FC<Props> = ({title, completed, checkTodo, id}) => {
  return (
    <li>
      <span>{title}</span>
      <input type="checkbox" checked={completed} onChange={() => checkTodo(id)}/>
    </li>
  )
}

export default Todo