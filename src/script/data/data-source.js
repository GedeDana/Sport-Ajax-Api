import axios from 'axios';

class DataSource {
    static searchPlayers(key){
        return fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${key}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.player) {
                return Promise.resolve(responseJson.player);
            } else {
                return Promise.reject(`${key} is not found`);
            }
        })
    }

static renderLeagueInfo(){
    return fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England`)
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        if(responseJson.countrys) {
            return Promise.resolve(responseJson.countrys);
        } else {
            return Promise.reject(`Statistik Liga inggris Tidak Ada`);
        }
    })

    }

}

export default DataSource;