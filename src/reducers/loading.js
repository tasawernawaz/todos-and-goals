import RECIEVE_DATA from '../actions/shared'

export function loading(state = true, action) {
    switch (action.type) {
        case RECIEVE_DATA:
            return !state
        default:
            return state
    }

}
