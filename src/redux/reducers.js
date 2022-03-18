import { GET_REPOS } from "./action";

const initialState = {
    repos: [],
    isLoader: false
}

function userReducer(state = initialState, action) {
    switch(action.type){
        case GET_REPOS:
            return {...state, repos: action.payload, isLoader: true};
        default:
            return state;
    }
}

export default userReducer;