import PostListComponent from '../../components/Main/PostListComponent';


const PostListContainer = ({history, posts}) => {
    return(
        <>
            <PostListComponent history={history} posts={posts}/>
        </>
    );
}

export default PostListContainer;