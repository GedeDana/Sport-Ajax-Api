class leagueTitleItem extends HTMLElement {
    set countries(countries) {
        this._countries = countries;
        this.render();
   }
   render(){

    this.innerHTML = `
    <h3>${this._countries.strLeague}</h3>`;
    
   }
    
}
customElements.define("league-title-item", leagueTitleItem);
