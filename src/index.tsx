import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import TodoListContainer from './containers/TodoListContainer'

const TodoApp: React.FC = () => (
  <Provider store={store}>
    <TodoListContainer />
  </Provider>
)

render(<TodoApp />, document.getElementById("root"))