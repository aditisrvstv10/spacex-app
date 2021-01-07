import rootReducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise, thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
      module.hot.accept('../reducers/index.js', () => {
      const nextReducer = require('../reducers/index.js');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}