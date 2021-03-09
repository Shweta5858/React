import {combineReducers} from 'redux';
import errorReducer from './errorReducers';
import CaloriesLogReducer from './CaloriesLogReducer';
export default combineReducers({
    errors:errorReducer,
    calorieslogs:CaloriesLogReducer
});