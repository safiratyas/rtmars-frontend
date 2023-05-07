import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware
} from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(thunk))));
export default store;