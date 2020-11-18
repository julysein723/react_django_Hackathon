import { createAction, handleActions } from 'redux-actions';


const initState = {
    value: 0,
};
  
const MENU_MAIN = "under/MENU_MAIN";
const MENU_COMMUNITY = "under/MENU_COMMUNITY";
const MENU_CART = "under/MENU_CART";
const MENU_MY = "under/MENU_MY";

export const menuMain = createAction(MENU_MAIN, (value)=>({
  value,
}));
export const menuCommunity = createAction(MENU_COMMUNITY, (value)=>({
  value,
}));
export const menuCart = createAction(MENU_CART, (value)=>({
  value,
}));
export const menuMy = createAction(MENU_MY, (value)=>({
    value,
}));


const reducer = handleActions(
  {
    [MENU_MAIN]: (state, {payload: {value}})=>({
        ...state,
        value: 0,
    }),
    [MENU_COMMUNITY]: (state, {payload: {value}})=>({
        ...state,
        value: 1,
    }),
    [MENU_CART]: (state, {payload: {value}})=>({
        ...state,
        value: 2,
    }),
    [MENU_MY]: (state, {payload: {value}})=>({
        ...state,
        value: 3,
    }),
  },
  initState
);

export default reducer;