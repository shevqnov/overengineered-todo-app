import axios from "axios";

const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})

export const fetchTodos = (page: number = 1) => api.get(`/todos?_page=${page}`)