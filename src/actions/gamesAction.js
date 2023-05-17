import axios from 'axios';
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl } from '../api';

// Action creator

export const loadGames = () => async (dispatch) => {
    // Fetch axios
    const popularGames = await axios.get(popularGamesUrl());
    const newGames = await axios.get(newGamesUrl());
    const upcomingGames = await axios.get(upcomingGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.data.results,
            new_: newGames.data.results,
            upcoming: upcomingGames.data.results
        }
    })
}