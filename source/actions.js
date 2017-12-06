import * as constants from './constants'

export function requestUsers() {
    return {
        type: constants.REQUEST_USERS
    }
}

export function setData(json) {
    return {
        type: constants.SET_DATA,
        data: json
    }
}

export function fetchData() {
    // docs
    return dispatch => {
        dispatch(requestUsers())
        return fetch('http://dev.frevend.com/json/users.json')
            .then(response => response.json())
            .then(json => dispatch(setData(json)))
    }
}

