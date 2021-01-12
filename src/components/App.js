import React from 'react'
import ConnectedTodos from './todos'
import ConnectedGoals from './goals'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }

  render() {
      const loading = this.props.loading

      if (loading === true) {
          return <h3>Loading</h3>
      }

      return (
          <div>
              <ConnectedTodos />
              <ConnectedGoals />
          </div>
      )
  }
}

export default connect(state => ({
  loading: state.loading
}))(App)
