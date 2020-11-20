import style from 'styled-components';
import foodImg from '../../assets/image/5.png';

const PostWrap = style.div`
    background-color: #ffffff;
    width: 90vw;
    height: 20vw;
    border-radius: 4vw;
    box-shadow: 0vw 1vw 3vw 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 5vw;
    display: flex;
    flex-direction: row;
`;

const PostImg = style.img`
    width: 27vw;
    height: 20vw;
    margin-left: 1vw;
`;

const PostDetailWrap = style.div`
    display: flex;
    flex-direction: column;
    margin-top: 3vw;
    margin-left: 1vw;
`;

const PostName = style.div`
    font-size: 1rem;
    font-weight: 900;
`;

const PostDetail = style.div`
    font-size: 0.55rem;
    font-weight: bold;
    color: rgba(210, 210, 210, 1);
`;

const PostSign = style.div`
    font-size: 0.55rem;
    font-weight: 700;
    color: rgba(249, 210, 86, 1);
`;

const PostPrice = style.div`
    font-size: 1rem;
    font-weight: 900;
    color: rgba(48, 119, 86, 1);
    margin-top: 12vw;
    position: absolute;
    right: 10%;
    font-family: 'Noto Sans KR';
`;

const str1 = '오징어 불짬뽕';
const str2 = '맛있게 매운 해물가득 불짬뽕';
const str3 = '9800원~';

const PostComponent = ({value, onClick}) => {
    return(
        <>
            <PostWrap onClick={onClick}>
                <PostImg src={foodImg}/>
                <PostDetailWrap>
                    <PostName>{str1}</PostName>
                    <PostDetail>{str2}</PostDetail>
                    <PostSign>signiture</PostSign>
                </PostDetailWrap>
                <PostPrice>{str3}</PostPrice>
            </PostWrap>
        </>
    );
}

export default PostComponent;