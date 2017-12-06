import * as constants from '../constants'

export default function (state={data: [], loading: true}, action) {
    switch (action.type) {
        case constants.REQUEST_USERS:
            return {...state, loading: true}
        case constants.SET_DATA:
            return {...state, data: action.data.users, loading: false}
        default:
            return state
    }
}
