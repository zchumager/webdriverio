class Page {
    constructor(title) {
        this.title = title
    }

    open(path) {
        browser.url(path)
    }
}

module.exports = Page