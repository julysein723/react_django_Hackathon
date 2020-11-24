import style from 'styled-components';
import PostContainer from '../../containers/Cart/PostContainer';

const Wrap = style.div`
    position: absolute;
    width: 100vw;
    height: 150vw;
    margin-top: 20vw;
    padding-top: 5vw;
    background-color: rgba(248, 246, 250, 1);
    display: flex;
`;

const PostListWrap = style.div`
    position: relative;
    width: 100vw;
    z-index: 0;
    display: grid;
    grid-template-column: 1fr;
    align-item: center;
    background-color: rgba(248, 246, 250, 1);
    margin-left: 5vw;
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

const PostListComponent = ({onHandleClick}) => {
    return(
        <>
            <Wrap>
                <PostListWrap>
                    <Space />
                    <PostContainer />
                    <PostContainer />
                    <BtnAdd onClick={onHandleClick}>+ 더 담으러 가기</BtnAdd>
                    <Space />
                    <Space />
                    <Space />
                    <Space />
                    <Space />
                    <Space />
                    <Space />
                    <Space />
                </PostListWrap>
            </Wrap>
        </>
    )
}

export default PostListComponent;