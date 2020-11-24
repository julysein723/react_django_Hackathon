import HeaderContainer from '../../containers/Main/HeaderContainer';
import MiddleMenuContainer from '../../containers/Main/MiddleMenuConstainer';
import PostListContainer from '../../containers/Main/PostListContainer';
import UnderBarContainer from '../../containers/Main/UnderBarContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ToolPage = ({history, location}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function get() {
            const axiosPosts = await axios.get('http://127.0.0.1:8000/utensil/utensil/');
            console.log('통신 : ', axiosPosts);
            const posts = axiosPosts.data;
            setPosts(posts);
        };
        get();
    }, [])
    
    return(
        <div>
            <HeaderContainer />
            <MiddleMenuContainer />
            <PostListContainer history={history} posts={posts}/>
            <UnderBarContainer history={history} location={location}/>
        </div>
    );
}

export default ToolPage;