import ADD_TODO from '../actions/todos'
import ADD_GOAL from '../actions/goals'

const alertMiddleware = store => next => action => {
    const result = next(action)
    if (action.type === ADD_TODO) {
        alert("Don't forget to " + action.todo.name)
    }

    if (action.type === ADD_GOAL) {
        alert("That's a great goal!")
    }

    return result
}

export default alertMiddleware