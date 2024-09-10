import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDosService {

    constructor() {
        console.log('To Dos Service is loaded')
    }

    async getToDos() {
        const response = await api.get('api/todos')
        console.log('ToDos Service is Loaded', response.data)
        const userToDos = response.data.map((toDoPOJO) => new ToDo(toDoPOJO))
        AppState.todo = userToDos
    }

    async makeToDo(formData) {
        const response = await api.post('api/todos', formData)
        const newToDo = new ToDo(response.data)
        AppState.todo.push(newToDo)
        console.log('creating new todo', response.data)
    }

    async toggleToDo(toDoId) {
        const toDoIndex = AppState.todo.findIndex((todo) => toDoId == todo.id)
        const foundToDo = AppState.todo[toDoIndex]
        const response = await api.put(`api/todos/${toDoId}`, { completed: !foundToDo.completed })
        const newToDo = new ToDo(response.data)
        AppState.todo.splice(toDoIndex, 1, newToDo)
        console.log('todo complete', response.data);
    }
}

export const toDosService = new ToDosService()