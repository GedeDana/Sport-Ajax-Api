class playerTitleItem extends HTMLElement {
    set players(players) {
        this._players = players;
        this.render();
   }
   
   render(){

    this.innerHTML = `
    <h3>${this._players.strPlayer}</h3>`;
    
   }
    
}
customElements.define("player-title-item", playerTitleItem);
