import * as constants from './constants'

export function setData(json) {
    return {
        type: constants.SET_DATA,
        data: json
    }
}

export function fetchData() {
    return dispatch => {
        //get data
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(setData(json)))
    }
}

