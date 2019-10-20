import { fetchTodos } from './actions';
import { call, put } from "redux-saga/effects";
import * as api from '../../api'

function* fetchTodosSaga(action: ReturnType<typeof fetchTodos.request>) {
  try {
    const response = yield call(api.fetchTodos, 1)
    yield put(fetchTodos.success(response.data))
  } catch (e) {
    yield put(fetchTodos.failure(e))
  }
}
