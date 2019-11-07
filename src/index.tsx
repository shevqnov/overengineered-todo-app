import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import TodoListContainer from './containers/TodoListContainer'
import AddTodo from './components/AddTodo'
import './index.css'
import VisibilityFilter from './components/VisibilityFilter'

const TodoApp: React.FC = () => (
  <div className='app'>
    <Provider store={store}>
      <h2>Todo List</h2>
      <VisibilityFilter />
      <AddTodo />
      <TodoListContainer />
    </Provider>
  </div>
)

render(<TodoApp />, document.getElementById("root"))