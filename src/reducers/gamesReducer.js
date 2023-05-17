const initState = {
    popular: [],
    new_: [],
    upcoming: [],
}

const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                new_: action.payload.new_
            }
        default:
            return {...state}
    }
}


export default gamesReducer;
