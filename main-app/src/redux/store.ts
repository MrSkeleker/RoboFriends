import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import { searchRobots, requestRobots } from './reducers/reducers';

const rootReducer = combineReducers({searchRobots, requestRobots});
const middlewares: any[] = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;