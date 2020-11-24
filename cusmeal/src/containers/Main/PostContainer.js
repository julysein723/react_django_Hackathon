import PostComponent from '../../components/Main/PostComponent';

const PostContainer = ({post, history}) => {
    const onHandleClick = (e) => {
        e.preventDefault();
        history.push('/main/post');
    }
    
    return(
        <>
            <PostComponent post={post} onClick={onHandleClick}/>
        </>
    );
}

export default PostContainer;