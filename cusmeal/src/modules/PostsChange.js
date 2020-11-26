import { createAction, handleActions } from 'redux-actions';


const initState = {
    posts: [],
};

const GET_POSTS = "GET_POSTS";

export const getPosts = createAction(GET_POSTS, (posts)=>({
  posts,
}));

const reducer = handleActions(
    {
      [GET_POSTS]: (state, {payload: {posts}})=>({
        ...state,
        posts: posts,
      }),
    },
    initState
  );
  
  export default reducer;