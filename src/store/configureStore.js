import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import logger from '../middleware/logger';
// import persistState from 'redux-localstorage';

import rootReducer from '../reducers';

function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger),
  );
}

export default configureStore;
