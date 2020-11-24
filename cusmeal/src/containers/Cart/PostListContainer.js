import PostListComponent from '../../components/Cart/PostListComponent';

const PostListContainer = ({history}) => {
    const onHandleClick = () => {
        history.push('/main')
    } 
    
    return(
        <>
            <PostListComponent onHandleClick={onHandleClick}/>
        </>
    )
}

export default PostListContainer;