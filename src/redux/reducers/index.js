import {
  combineReducers
} from 'redux';
import {
  getCitizenLoginReducer
} from './getCitizenLogin';
import {
  getCitizenReducer
} from './getCitizen'
import {
  getListCitizenReducer
} from './getListCitizen'
import {
  getAdminLoginReducer
} from './getAdminLogin'
import {
  getListAdminReducer
} from './getListAdmin';
import {
  getListReligionReducer
} from './getListReligion';
import {
  getListJobReducer
} from './getListJob';

export default combineReducers({
  getCitizenLoginReducer,
  getCitizenReducer,
  getListCitizenReducer,
  getAdminLoginReducer,
  getListAdminReducer,
  getListReligionReducer,
  getListJobReducer
});