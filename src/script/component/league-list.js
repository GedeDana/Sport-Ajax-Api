import './league-item.js';
import './league-title-item.js';
class leagueList extends HTMLElement {
    set countrys(countrys) {
        this._countrys = countrys;
        this.render();
   }
    render(){
        this.innerHTML ='';
        this._countrys.forEach(countries =>{
            const indonesiaItemElement = document.createElement("league-item");
            const indonesiaName = document.createElement("league-title-item");
            indonesiaItemElement.countries = countries;
            indonesiaName.countries = countries;
            this.appendChild(indonesiaName);
            this.appendChild(indonesiaItemElement);
        })
      
    }
    renderError() {
        this.innerHTML = "";
        this.innerHTML += `<h2>Liga Tidak ketemukan</h2>`;
   }
}
customElements.define("league-list", leagueList);