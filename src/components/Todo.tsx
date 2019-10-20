import * as React from 'react'

interface Props {
  id: string
  title: string
  completed: boolean
  toggleTodo: (id: string) => void
}

const Todo: React.FC<Props> = ({title, completed, toggleTodo, id}) => {
  return (
    <li>
      <span>{title}</span>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
    </li>
  )
}

export default Todo