import { combineReducers } from 'redux';
import { getCitizenLoginReducer } from './getCitizenLogin';
import { getCitizenReducer } from './getCitizen'
import { getListCitizenReducer } from './getListCitizen'

export default combineReducers({
    getCitizenLoginReducer,
    getCitizenReducer,
    getListCitizenReducer
});