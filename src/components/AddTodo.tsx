import * as React from 'react'
import { addTodo as addTodoAction } from '../store/todo/actions'
import { useDispatch } from 'react-redux';

const AddTodo: React.FC = () => {
  const [value, setValue] = React.useState<string>('')

  const dispatch = useDispatch()

  const addTodo = React.useCallback(() => {
    dispatch(
      addTodoAction({
        id: new Date().getTime().toString(),
        title: value,
        completed: false
      })
    )
  }, [dispatch, value])

  const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }, [value, setValue])

  const onSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!value) return
    addTodo()
    setValue('')
  }, [addTodo])

  return (
    <form onSubmit={onSubmit}>
      <input value={value} type='text' onChange={onChange} />
      <input type='submit' value="Add Todo" />
    </form>
  )
}

export default AddTodo