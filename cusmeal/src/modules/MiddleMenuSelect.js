import { createAction, handleActions } from 'redux-actions';


const initState = {
    value: 0,
};
  
const MENU_MEAL = "middle/MENU_MEAL";
const MENU_GRAD = "middle/MENU_GRAD";
const MENU_TOOL = "middle/MENU_TOOL";

export const menuMeal = createAction(MENU_MEAL, (value)=>({
  value,
}));
export const menuGrad = createAction(MENU_GRAD, (value)=>({
  value,
}));
export const menuTool = createAction(MENU_TOOL, (value)=>({
  value,
}));


const reducer = handleActions(
  {
    [MENU_MEAL]: (state, {payload: {value}})=>({
      ...state,
      value: 0,
    }),
    [MENU_GRAD]: (state, {payload: {value}})=>({
      ...state,
      value: 1,
    }),
    [MENU_TOOL]: (state, {payload: {value}})=>({
      ...state,
      value: 2,
    }),
  },
  initState
);

export default reducer;