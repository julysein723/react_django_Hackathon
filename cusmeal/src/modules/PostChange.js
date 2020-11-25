import { createAction, handleActions } from 'redux-actions';


const initState = {
    post: {},
};

const GET_POST = "GET_POST";

export const getPost = createAction(GET_POST, (post)=>({
  post,
}));

const reducer = handleActions(
    {
      [GET_POST]: (state, {payload: {post}})=>({
        ...state,
        post: post,
      }),
    },
    initState
  );
  
  export default reducer;