import style from 'styled-components';

const Wrap = style.div`
    width: 90vw;
    height: 40vw;
    border-radius: 4vw;
    display: flex;
    flex-direction: row;
    box-shadow: 0vw 2vw 5vw 0 rgba(0, 0, 0, 0.2);
    font-family: 'Noto Sans KR';
    margin-bottom: 7vw;
    background-color: white;
`;

const WrapTwo = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7vw;
`;

const Name = style.div`
    font-size: 1rem;
    font-weight: 900;
    color: black;
`;

const Price = style.div`
    font-size: 1rem;
    font-weight: 900;
    color: rgba(48, 119, 86, 1);
    margin-top: 3vw;
`;

const DetailList = style.ul`
    margin: 1vw 0;
    padding-left: 7vw;
`;

const Detail = style.li`
    color: rgba(187, 187, 187, 1);
    font-size: 0.8rem;
    font-weight: 500;
`;

const BtnClose = style.button`
    position: relative;
    padding: 0;
    width: 7vw;
    height: 7vw;
    outline: none;
    border: none;
    background-color: white;
    font-size: 1.5rem;
    color: rgba(187, 187, 187, 1);
    left: 48%;
    top: 5%;
`;

const str1 = "오징어 불짬뽕";
const str2 = "11800원";
const str3 = "오징어 100g 추가";

const PostComponent  = () => {
    return(
        <>
            <Wrap>
                <WrapTwo>
                    <Name>{str1}</Name>
                    <DetailList>
                        <Detail>{str3}</Detail>
                        <Detail>{str3}</Detail>
                        <Detail>{str3}</Detail>
                    </DetailList>
                    <Price>{str2}</Price>
                </WrapTwo>
                <BtnClose>x</BtnClose>
            </Wrap>
        </>
    )
}

export default PostComponent;