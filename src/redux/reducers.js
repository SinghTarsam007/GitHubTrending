import { ADD, GET_REPOS, LOADER, REMOVE, RESET_REPOS } from "./action";

const initialState = {
    repos: [],
    isLoader: false,
    favourites: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REPOS:
            return { ...state, repos: action.payload, isLoader: true };
        case LOADER:
            return { ...state, isLoader: true };
        case RESET_REPOS:
            return { ...state, repos: [], isLoader: false, };
        case ADD:
            return { ...state, favorites: [state.favourites.push(action.payload)] };
        case REMOVE:
            return { ...state, favorites: [state.favourites.splice(action.payload, 1)] }
        default:
            return state;
    }
}

export default userReducer;