import { combineReducers } from "redux";
import MiddleMenuSelect from "./MiddleMenuSelect";
import UnderBarSelect from './UnderBarSelect';
import CustomBtnClick from './CustomBtnClick';

const rootReducer = combineReducers({
  MiddleMenuSelect,
  UnderBarSelect,
  CustomBtnClick,
});


export default rootReducer;