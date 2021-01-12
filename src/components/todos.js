import React from 'react'
import List from './list'
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos'
import { connect } from 'react-redux'


class Todo extends React.Component {
    addItem = (event) => {
        this.props.dispatch(
            handleAddTodo(
                this.searchField.value,
                this.searchField
            )
        )
    }

    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }

    toggleItem = (id) => {
        this.props.dispatch(handleToggleTodo(id))
    }

    render() {
        return (
            <div>
                <h1>My Todos</h1>
                <input
                    type="text"
                    placeholder="Add todo"
                    ref={(input) => this.searchField = input}
                >
                </input>
                <button onClick={this.addItem}>Add</button>
                <List
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggleItem={this.toggleItem}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todo)