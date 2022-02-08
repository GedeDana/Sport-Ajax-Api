class playerItem extends HTMLElement {
    set players(players) {
        this._players = players;
        this.render();
   }
   render(){

    this.innerHTML = `
        <div class="box blue">
            <h3>Sport</h3>
            <p>${this._players.strSport}</p>
        </div>
        <div class="box yellow">
            <h3>Name Team</h3>
            <p>${this._players.strTeam}</p>
        </div>
        <div class="box red">
            <h3>Born</h3>
            <p>${this._players.dateBorn}</p>
        </div>`;
   }
    
}
customElements.define("player-item", playerItem);
