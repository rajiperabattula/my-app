import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import allReducers from './Reducers'
import thunk from 'redux-thunk'

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store;