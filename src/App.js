import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import configureStore from './store/configureStore.js';
import SpaceXContainer from './containers/spaceXContainer'
import { Route } from 'react-router';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
            <div className="App">
              <header className="App-header">
                <div className="Header">
                  <p>SpaceX Launch Programs</p>
                </div>
                  <Switch>
                    <Route path='*' component={SpaceXContainer}/>
                  </Switch>
              </header>
            </div>
    </Provider>
  );
}

export default App;
