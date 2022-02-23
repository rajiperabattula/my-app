import {combineReducers} from 'redux';
import pageDataReducer from './pageData/pageDataReducer'

const allReducers = combineReducers({
    list:pageDataReducer
})

export default allReducers;