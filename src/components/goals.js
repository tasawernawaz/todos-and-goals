import React from 'react'
import { connect } from 'react-redux'

import List from './list'
import {handleAddGoal,
    handleRemoveGoal
} from '../actions/goals'

class Goal extends React.Component {
    addItem = (event) => {
        this.props.dispatch(handleAddGoal(
            this.searchField.value,
            () => this.searchField.value = ""
        ))
    }

    removeItem = (goal) => {
        this.props.dispatch(handleRemoveGoal(goal))
    }

    render() {
        return (
            <div>
                <h1>My Goals</h1>
                <input
                    type="text"
                    placeholder="Add goal"
                    ref={(input) => this.searchField = input}
                >
                </input>
                <button onClick={this.addItem}>Add</button>

                <List items={this.props.goals} remove={this.removeItem} />
            </div>
        )
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goal)
