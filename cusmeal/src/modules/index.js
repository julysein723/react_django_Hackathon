import { combineReducers } from "redux";
import MiddleMenuSelect from "./MiddleMenuSelect";
import UnderBarSelect from './UnderBarSelect';
import CustomBtnClick from './CustomBtnClick';
import PostChange from './PostChange';
import PriceChange from './PriceChange';

const rootReducer = combineReducers({
  MiddleMenuSelect,
  UnderBarSelect,
  CustomBtnClick,
  PostChange,
  PriceChange,
});


export default rootReducer;