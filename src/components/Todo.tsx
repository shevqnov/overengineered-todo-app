import * as React from 'react'

interface Props {
  id: string
  title: string
  completed: boolean
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

const Todo: React.FC<Props> = ({title, completed, toggleTodo, id, removeTodo}) => {
  return (
    <li>
      <span>{title}</span>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <b style={{
        cursor: 'pointer'
      }} onClick={() => removeTodo(id)}>X</b>
    </li>
  )
}

export default Todo