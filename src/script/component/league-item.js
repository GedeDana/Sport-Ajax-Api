class leagueItem extends HTMLElement {
    set countries(countries) {
        this._countries = countries;
        this.render();
   }
   render(){

    this.innerHTML = `
    <div class="box blue">
        <h3>Formed Year</h3>
        <p>${this._countries.intFormedYear}</p>
    </div>
    <div class="box yellow">
        <h3>League Division</h3>
        <p>Division ${this._countries.strDivision}</p>
    </div>
    <div class="box red">
        <h3>Sport</h3>
        <p>${this._countries.strSport}</p>
    </div>
       `;
   }
    
}
customElements.define("league-item", leagueItem);