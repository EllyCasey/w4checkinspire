
export class ToDo {
    constructor(data) {
        this.id = data.id
        this.content = data.content
        this.completed = data.completed
    }

    getToDoHTMLTemplate() {
        return /*html*/ `
        <div class="row justify-content-end">
        <div class="col-4 pb-5 pe-5 todo-card">
          <h3 class="pb-2">To Do:</h3>
  
          <div>
            <form class="user-form pb-2">
              <textarea name="todo-list" id="todo-list" rows="2" cols="30" minlength="2" maxlength="50"></textarea>
              <br>
              <button class="btn btn-dark"><i class="mdi mdi-plus"></i></button>
            </form>
          </div>
  
    <!-- NOTE this is the section for the to do list -->
  
  
          <div class="form-check pt-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">User To Do items go here</label>
          </div>
        </div>
      </div>
        `
    }
}