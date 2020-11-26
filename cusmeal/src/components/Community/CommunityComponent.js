import React from 'react';
import style from 'styled-components';
import PostComponent from './PostComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Wrap = style.div`
    position: absolute;
    z-index: -1;
    margin-top: 40vw;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgba(248, 246, 250, 1);
`;

const PostListWrap = style.div`
    position: relative;
    width: 95vw;
    display: grid;
    grid-template-column: 1fr;
    align-items: center;

    background-color: rgba(248, 246, 250, 1);
`;

const Space = style.div`
    width: 100vw;
    height: 5vw;
`;
const SpaceTwo = style.div`
    width: 100vw;
    height: 15vw;
`;

const CommunityComponent = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function get() {
            const axiosPosts = await axios.get('http://127.0.0.1:8000/post/post/');
            //console.log('통신 : ', axiosPosts);
            const posts = axiosPosts.data;
            setPosts(posts);
        };
        get();
    }, [])
    
    return(
        <Wrap>
            <PostListWrap>
                <Space />
                {posts.map((post, i) => {
                    return(
                        <PostComponent key={i} post={post} />
                    )
                })}
                <SpaceTwo />
            </PostListWrap>
        </Wrap>
    );
}

export default CommunityComponent;