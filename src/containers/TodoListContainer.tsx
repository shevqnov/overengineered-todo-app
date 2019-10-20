import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import TodoList, {StateProps, OwnProps, DispatchProps} from '../components/TodoList'
import { AppState } from "../store";
import { todoListSelector } from "../selectors/todo";
import { toggleTodo } from "../store/todo/actions";

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state) => ({
  todoList: todoListSelector(state)
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = dispatch => ({
  toggleTodo: (id: string) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)