import * as React from 'react'
import { Todo } from '../store/todo/types';

interface DispatchProps {
  addTodo: (todo: Todo) => void
}

const AddTodo: React.FC<DispatchProps> = ({addTodo}) => {
  const [value, setValue] = React.useState<string>('')

  const onChange = React.useCallback((event) => {
    console.log(event)
  }, [value, setValue])

  const onSubmit = React.useCallback((event) => {
    console.log(event)
  }, [addTodo])

  return (
    <form onSubmit={onSubmit}>
      <input type='text' onChange={onChange} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}