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
import {
  getListEducationReducer
} from './getListEducation';
import {
  getListDocumentReducer
} from './getListDocument'
import {
  getDocumentReducer
} from './getDocument'
import {
  getProfileReducer
} from './updateCitizen'
import {
  createCitizenReducer
} from './inputCitizen'
import {
  createEventReducer
} from './createEvent'
import {
  getListAgendaReducer
} from './getAllAgenda'

export default combineReducers({
  getCitizenLoginReducer,
  getCitizenReducer,
  getListCitizenReducer,
  getAdminLoginReducer,
  getListAdminReducer,
  getListReligionReducer,
  getListJobReducer,
  getListEducationReducer,
  getListDocumentReducer,
  getDocumentReducer,
  getProfileReducer,
  createCitizenReducer,
  createEventReducer,
  getListAgendaReducer
});