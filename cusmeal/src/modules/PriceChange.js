import { createAction, handleActions } from 'redux-actions';


const initState = {
    value: 0,
};

const PRICE_CHANGE = "cart/PRICE_CHANGE";

export const changePrice = createAction(PRICE_CHANGE, (value)=>({
  value,
}));


const reducer = handleActions(
    {
      [PRICE_CHANGE]: (state, {payload: {value}})=>({
        ...state,
        value: value,
      }),
    },
    initState
  );
  
  export default reducer;