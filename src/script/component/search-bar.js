class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get value() {
        return this.querySelector("#searchElement").value;
    }
    render(){
        this.innerHTML =`
       
                <input class="form-control" id="searchElement" placeholder="Cari Pemain" type="search">
                <button class="btn btn-outline-success" id="searchButtonElement" type="button" >Cari</button>
        
        `
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
       
}
customElements.define("search-bar", SearchBar);