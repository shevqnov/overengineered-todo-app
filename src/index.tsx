import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import TodoListContainer from './containers/TodoListContainer'
import AddTodo from './components/AddTodo'
import './index.css'
import VisibilityFilter from './components/VisibilityFilter'

const TodoApp: React.FC = () => (
  <Provider store={store}>
    <VisibilityFilter />
    <TodoListContainer />
    <AddTodo />
  </Provider>
)

render(<TodoApp />, document.getElementById("root"))