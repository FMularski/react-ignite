import axios from 'axios';
import { popularGamesUrl } from '../api';

// Action creator

export const loadGames = () => async (dispatch) => {
    // Fetch axios
    const popularGames = await axios.get(popularGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.data.results
        }
    })
}