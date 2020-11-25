import { combineReducers } from "redux";
import MiddleMenuSelect from "./MiddleMenuSelect";
import UnderBarSelect from './UnderBarSelect';
import CustomBtnClick from './CustomBtnClick';
import PostChange from './PostChange';

const rootReducer = combineReducers({
  MiddleMenuSelect,
  UnderBarSelect,
  CustomBtnClick,
  PostChange,
});


export default rootReducer;