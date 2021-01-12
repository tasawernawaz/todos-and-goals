const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("dispatching action: ", action.type)
    console.log("current state of store is ", store.getState())
    const result = next(action)
    console.log("Next state of action: ", store.getState())
    console.groupEnd()
    return result
}

export default logger