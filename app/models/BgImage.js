
export class BgImage {
    constructor(data) {
        this.author = data.author
        this.imgUrl = data.largeImgUrl
    }

    get bgImageDetailsHTMLTemplate() {
        return /*html*/ `
            <div class="row">
                <div class="col-4">
                    <h3 class="ms-3 fs-4">${this.author}</h3>
                </div>
            </div>
        `
    }
}
