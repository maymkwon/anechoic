import React, { Component } from 'react';
import * as actions from './moduls/ActionTest';
import {connect} from 'react-redux'
import Test from './Test'
// import { toJS } from 'immutable'
class App extends Component {

  handleTest =() => {
    this.props.handleTest('red')
  }
  handleTestremove =() => {
    this.props.handleTestremove('red')
  }
  handleTestgetList =() => {
    this.props.handleTestgetList()
  }
  render() {
    const { counter, list } = this.props
    const data = counter.toJS()
    console.log(list)
    return (
      <div className="App">
        <button onClick={this.handleTest}>click</button>
        <button onClick={this.handleTestremove}>click</button>
        <button onClick={this.handleTest}>click</button>
        <button onClick={this.handleTestgetList}>click</button>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.ActionTest.get('counter'),
    list: state.ActionTest.get('list').toJS()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleTest: (arg) => dispatch(actions.create(arg)),
  handleTestremove: (arg) => dispatch(actions.remove(arg)),
  handleTestgetList: (arg = null) => dispatch(actions.get(arg))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);