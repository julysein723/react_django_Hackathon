import PostComponent from '../../components/Main/PostComponent';

const PostContainer = ({value, history}) => {
    const onHandleClick = (e) => {
        e.preventDefault();
        history.push('/main/post');
    }
    
    return(
        <>
            <PostComponent value={value} history={history} onClick={onHandleClick}/>
        </>
    );
}

export default PostContainer;