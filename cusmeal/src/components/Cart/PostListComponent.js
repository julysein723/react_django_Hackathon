import style from 'styled-components';
import PostContainer from '../../containers/Cart/PostContainer';

const Wrap = style.div`
    position: absolute;
    width: 100vw;
    height: 150vw;
    margin-top: 20vw;
    padding-top: 5vw;
    background-color: rgba(248, 246, 250, 1);
`;

const PostListWrap = style.div`
    position: relative;
    width: 100vw;
    height: 200vw;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(248, 246, 250, 1);
`;

const BtnAdd = style.button`
    width: 90vw;
    height: 15vw;
    border-radius: 3vw;
    background-color: white;
    box-shadow: 0vw 2vw 5vw 0 rgba(0, 0, 0, 0.2);
    outline: none;
    color: rgba(249, 210, 86, 1);
    font-weight: bold;
    font-size: 0.9rem;
    border: none;
`;

const Space = style.div`
    width: 90vw;
    height: 3vw;
`;

const PostListComponent = () => {
    return(
        <>
            <Wrap>
                <PostListWrap>
                    <Space />
                    <PostContainer />
                    <PostContainer />
                    <BtnAdd>+ 더 담으러 가기</BtnAdd>
                </PostListWrap>
            </Wrap>
        </>
    )
}

export default PostListComponent;