import { combineReducers } from 'redux'

import todos from '../reducers/todos'
import goals from '../reducers/goals'
import loading from '../reducers/todos'

export default combineReducers({
    todos,
    goals,
    loading
})