import PostListComponent from '../../components/Cart/PostListComponent';

const PostListContainer = ({history, posts, onDelete, deletePost}) => {
    const onHandleClick = () => {
        history.push('/main')
    }
    
    
    
    return(
        <>
            <PostListComponent posts={posts} onHandleClick={onHandleClick} onDelete={onDelete} deletePost={deletePost}/>
        </>
    )
}

export default PostListContainer;