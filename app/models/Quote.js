
export class Quote {
    constructor(data) {
        this.id = data.id
        this.content = data.content
        this.author = data.author
    }

    get quoteHTMLTemplate() {
        return /*html*/ `
        <div class="col-12 unhide-author">
            <p>${this.content}</p>
        </div>
        <div class="col-5 pb-5 hide">
            <p>${this.author}</p>
        </div>
        `
    }
}

// {"_id":"kc_i68XUTzm9",
//     "content":"If you spend too much time thinking about a thing, you'll never get it done.","author":"Bruce Lee",
//     "tags":["Famous Quotes"],
//     "authorSlug":"bruce-lee",
//     "length":76,
//     "dateAdded":"2020-12-17","dateModified":"2023-04-14"}