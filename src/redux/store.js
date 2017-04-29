import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const reducer = combineReducers(rootReducer);
const store = compose(autoRehydrate())(createStoreWithMiddleware)(reducer);

export default store;
