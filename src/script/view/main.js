
import '../component/league-list.js';
import '../component/player-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const listPlayer = () => {
    const searchElement = document.querySelector("search-bar");
    const playerListElement = document.querySelector("player-list");

    const onButtonSearchClicked = () => {
        DataSource.searchPlayers(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)    
      
    };

    const renderResult =  results => {
        playerListElement.player = results;
        
    };

    const fallbackResult = message => {
        playerListElement.renderError(message);
    };
 
    searchElement.clickEvent = onButtonSearchClicked;
};

const listLeague = () => {
    const leagueInfoElement = document.querySelector("league-list");
    const render = () => {
        DataSource.renderLeagueInfo()
            .then(renderResult)
            .catch(fallbackResult)        
    }
    const renderResult = results => {
        leagueInfoElement.countrys = results;
    }

    const fallbackResult = () =>  {
        leagueInfoElement.renderError();
    };

    render();

}
export { listPlayer, listLeague };