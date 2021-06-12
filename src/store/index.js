import { combineReducers } from "redux";
import {
  AboutRunningStore,
  EmergencyStore,
  MedicalinfoStore,
  PersonalStore,
  SouvenirShirtStore,
} from "./features";

export default combineReducers({
  AboutRunningStore,
  EmergencyStore,
  MedicalinfoStore,
  PersonalStore,
  SouvenirShirtStore
});

