import PostComponent from '../../components/Main/PostComponent';
import {useDispatch,useSelector} from 'react-redux';
import {getPost} from '../../modules/PostChange';

const PostContainer = ({post, history}) => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => ({
        posts: state.PostChange.post,
    }));
    
    const onHandleClick = (e) => {
        e.preventDefault();
        console.log(post);
        dispatch(getPost(post));
        history.push('/main/post');
        //console.log(id,post.id);
    }
    
    return(
        <>
            <PostComponent post={post} onClick={onHandleClick}/>
        </>
    );
}

export default PostContainer;