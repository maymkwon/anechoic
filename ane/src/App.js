import React, { Component } from 'react';
import ConfigureStore from './config/ConfigureStore'
import * as actions from './actions'

export const store = ConfigureStore()
store.dispatch(actions.setTracks(tracks))
class App extends Component {
  render() {
    return (
      <div className="App">
        <Stream />
      </div>
    );
  }
}

export default App;
