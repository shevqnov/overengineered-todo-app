import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import TodoList, {StateProps, OwnProps, DispatchProps} from '../components/TodoList'
import { AppState } from "../store";
import { todoListSelector } from "../selectors/todo";
import { checkTodo } from "../store/todo/actions";

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state) => ({
  todoList: todoListSelector(state),
  currentView: state.todo.currentView,
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = dispatch => ({
  checkTodo: (id: string) => dispatch(checkTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)