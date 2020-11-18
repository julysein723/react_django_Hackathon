import { combineReducers } from "redux";
import MiddleMenuSelect from "./MiddleMenuSelect";
import UnderBarSelect from './UnderBarSelect';


const rootReducer = combineReducers({
  MiddleMenuSelect,
  UnderBarSelect,
});


export default rootReducer;