import './player-item.js';
import './player-title-item.js';
class playerList extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
   }
    render(){
        this.innerHTML ='';
        this._player.forEach((players) =>{
            const provinceItemElement = document.createElement("player-item");
            const provinceName = document.createElement("player-title-item");
            provinceItemElement.players = players;
            provinceName.players  = players;
            this.appendChild(provinceName);
            this.appendChild(provinceItemElement);
        })
    
    }
    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
}
customElements.define("player-list", playerList);