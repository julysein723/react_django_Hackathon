import PostComponent from '../../components/Cart/PostComponent';

const PostContainer = ({post, onDelete, deletePost}) => {
    return(
        <>
            <PostComponent post={post} onDelete={onDelete} deletePost={deletePost}/>
        </>
    )
}

export default PostContainer;