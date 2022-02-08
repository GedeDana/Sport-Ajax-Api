class headerBarNav extends HTMLElement {

    connectedCallback() {
        this.render();      
    }
    render() {
        this.innerHTML = `
        <h1><a href="#">Sport League</a></h1>`
    }
}
customElements.define("app-bar-nav", headerBarNav);