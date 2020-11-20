import { createAction, handleActions } from 'redux-actions';


const initState = {
    value: 1,
};

const CLICK_MINUS = "post/CLICK_MINUS";
const CLICK_PLUS = "post/CLICK_PLUS";

export const clickMinus = createAction(CLICK_MINUS, (value)=>({
  value,
}));
export const clickPlus = createAction(CLICK_PLUS, (value)=>({
  value,
}));

const reducer = handleActions(
    {
      [CLICK_MINUS]: (state, {payload: {value}})=>({
        ...state,
        value: value - 1,
      }),
      [CLICK_PLUS]: (state, {payload: {value}})=>({
        ...state,
        value: value + 1,
      }),
    },
    initState
  );
  
  export default reducer;