import { createAction, handleActions } from 'redux-actions';


const initState = {
    value: 0,
};
  
const COMMUNITY = "middleC/MENU_MEAL";
const CONTEST = "middleC/MENU_GRAD";

export const community = createAction(COMMUNITY, (value)=>({
  value,
}));
export const contest = createAction(CONTEST, (value)=>({
  value,
}));


const reducer = handleActions(
  {
    [COMMUNITY]: (state, {payload: {value}})=>({
      ...state,
      value: 0,
    }),
    [CONTEST]: (state, {payload: {value}})=>({
      ...state,
      value: 1,
    }),
  },
  initState
);

export default reducer;