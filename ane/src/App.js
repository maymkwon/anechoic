import React, { Component } from 'react';
import * as actions from './moduls/ActionTest';
import {connect} from 'react-redux'
import Main from './main/Main'
import PageNav from './common/PageNav'
class App extends Component {
  
  render() {
    return (
      <div className="www">
        <PageNav />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.ActionTest.get('counter'),
    list: state.ActionTest.get('list')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleTest: (arg) => dispatch(actions.create(arg)),
  handleTestremove: (arg) => dispatch(actions.remove(arg)),
  handleTestgetList: (arg = null) => dispatch(actions.get(arg))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);