class leagueDesc extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML =`
        
        <article>
          <h2>Sport League</h2>
          <p>
          Sports League is a group of sports teams or individual athletes that compete 
          against each other and gain points in a specific sport. At its simplest, 
          it may be a local group of amateur athletes who form teams among themselves 
          and compete on weekends,at its most complex, it can be an international professional 
          league making large amounts of money and involving dozens of teams and thousands of players.
          </p>
       </article>
       `;
    }
}
customElements.define("league-desc", leagueDesc);