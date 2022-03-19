export const GET_REPOS = 'GET_REPOS';
export const RESET_REPOS = 'RESET_REPOS';

const API_URL = 'https://gh-trending-api.herokuapp.com/repositories';

export const getrepos = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_REPOS,
                    payload: json
                })
            } else {
                console.log("Something went wrong");
            }
        }
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const resetRepos = () => dispatch => {
    dispatch({
        type: RESET_REPOS
    })
}