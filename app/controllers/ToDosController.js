import { AppState } from "../AppState.js"
import { toDosService } from "../services/ToDosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class ToDosController {
    constructor() {
        console.log('To Dos Controller is loaded')
        AppState.on('todo', this.drawToDos)
        AppState.on('todo', this.drawToDoTotal)
        AppState.on('user', this.getToDos)

    }

    async createToDo() {
        try {
            event.preventDefault()
            const form = event.target
            const toDoData = getFormData(form)
            toDoData.content = toDoData.content.trim()
            if (toDoData.content == '') throw new Error('To Do must have 2 or more characters')
            console.log('To Do Data', toDoData)
            await toDosService.makeToDo(toDoData)
            //@ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    drawToDoTotal() {
        const toDos = AppState.todo
        const uncompletedToDos = toDos.filter((toDo) => !toDo.completed)
        setHTML('toDoNumberA', uncompletedToDos.length)
        setHTML('toDoNumberB', uncompletedToDos.length)
    }

    drawToDos() {
        const todos = AppState.todo
        let toDosHTMLString = ``
        todos.forEach((toDo) => toDosHTMLString += toDo.toDoHTMLTemplate)
        setHTML('toDoList', toDosHTMLString)
    }

    async getToDos() {
        try {
            await toDosService.getToDos()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async toggleCompleteToDo(toDoId) {
        try {
            await toDosService.toggleToDo(toDoId)
        } catch (error) {
            Pop.error(error)
            console.log(error);
        }
    }
}