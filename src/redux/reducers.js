import { GET_REPOS, LOADER, RESET_REPOS } from "./action";

const initialState = {
    repos: [],
    isLoader: false,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REPOS:
            return { ...state, repos: action.payload, isLoader: true };
        case LOADER:
            return { ...state, isLoader: true };
        case RESET_REPOS:
            return { initialState };
        default:
            return state;
    }
}

export default userReducer;