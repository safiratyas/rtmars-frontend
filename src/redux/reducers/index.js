import { combineReducers } from 'redux';
import { getCitizenLoginReducer } from './getCitizenLogin';
import { getCitizenReducer } from './getCitizen'

export default combineReducers({
    getCitizenLoginReducer,
    getCitizenReducer
});