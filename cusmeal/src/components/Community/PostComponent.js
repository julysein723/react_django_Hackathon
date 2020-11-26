import style from 'styled-components';
import profile from '../../assets/icon/profile_icon@2x.png';

const Wrap = style.div`
    width: 80vw;
    height: 60vw;
    border-radius: 4vw;
    display: flex;
    flex-direction: column;
    box-shadow: 0vw 2vw 5vw 0 rgba(0, 0, 0, 0.2);
    font-family: 'Noto Sans KR';
    margin-bottom: 7vw;
    background-color: white;
    padding: 0 5vw;
    padding-top: 3vw;
    margin-left: 5vw;
`;



const HeadWrap = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    margin-bottom: 3vw;
`;

const Profile = style.img`
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
`;

const Name = style.div`
    font-size: 0.9rem;
    font-weight: 900;
    margin-left: 2vw;
`;

const Space = style.div`
    width: 30vw;
`;

const DateWrap = style.div`
    color: rgba(187, 187, 187, 1);
    display: flex;
    flex-direction: row;
    position: relative;
    right: 0%;
`;

const Date = style.div`
    
`;

const Text = style.div`
    font-size: 0.7rem;
    width: 80vw;
`;

const More = style.div`
    font-size: 0.6rem;
    color: rgba(187, 187, 187, 1);
    margin-bottom: 2vw;
`;

const ImgWrap = style.div`
    width: 80vw;
    height: 30vw;
    border-radius: 4vw;
    overflow: hidden;
    margin: 0; padding: 0;
`;

const Img = style.img`
    width: 80vw;
    margin: 0; padding: 0;
`;

const WrapTwo = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;



const PostComponent = ({post}) => {
    return(
        <>
            <Wrap>
                <HeadWrap>
                    <WrapTwo>
                        <Profile src={profile}/>
                        <Name>{post.nickname}</Name>
                    </WrapTwo>
                    <DateWrap>
                        <Date>{post.date}</Date>
                        <Date>{post.time}</Date>
                    </DateWrap>
                </HeadWrap>
                <Text>{post.context.slice(0,70)}</Text>
                <More>...더보기</More>
                <ImgWrap>
                    <Img src={post.photo}/>
                </ImgWrap>
            </Wrap>
        </>
    )
}

export default PostComponent;