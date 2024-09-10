
export class ToDo {
    constructor(data) {
        this.id = data.id
        this.content = data.content
        this.completed = data.completed
    }

    getToDoHTMLTemplate() {
        return /*html*/ `
        <div class="col-12 mb-2">
        <div class="form-check d-flex align-items-center">
          <input onchange="app.ToDosController.toggleToDo('${this.id}')" class="form-check-input me-2" type="checkbox" id="${this.id}CheckBox" ${this.completed ? 'checked' : ''}>
          <label class="form-check-label ${this.completed ? 'text-decoration-line-through' : ''}" for="${this.id}CheckBox">
            ${this.content}
          </label>
        </div>
      </div>
        `
    }
}