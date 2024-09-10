import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDosService {

    async getToDos() {
        const response = await api.get('api/todos')
        console.log('ToDos Service is Loaded', response.data)
        const todo = new ToDo(response.data);
        AppState.todo = todo
    }
}

export const toDosService = new ToDosService()