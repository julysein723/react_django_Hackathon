import { combineReducers } from "redux";
import MiddleMenuSelect from "./MiddleMenuSelect";
import UnderBarSelect from './UnderBarSelect';
import CustomBtnClick from './CustomBtnClick';
import PostChange from './PostChange';
import PriceChange from './PriceChange';
import CommunityMenuSelect from './CommunityMenuSelect';
const rootReducer = combineReducers({
  MiddleMenuSelect,
  UnderBarSelect,
  CustomBtnClick,
  PostChange,
  PriceChange,
  CommunityMenuSelect,
});


export default rootReducer;