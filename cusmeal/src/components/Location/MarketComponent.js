import style from 'styled-components';
import market from '../../assets/이미지_주소/망원시장.jpg'

const MarketWrap = style.div`
    background-color: #ffffff;
    width: 40vw;
    height: 55vw;
    border-radius: 4vw;
    box-shadow: 0vw 1vw 3vw 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.5vw 0;
`;


const MarketImg = style.img`
    width: 35vw;
    height: 27vw;
    border-radius: 3vw;
`;

const MarketDetailWrap = style.div`
    width: 35vw;
    display: flex;
    flex-direction: column;
    margin-top: 3.5vw;
    margin-bottom: 7vw;
`;

const MarketName = style.div`
    font-size: 1rem;
    font-weight: 900;
`;

const MarketDetail = style.div`
    font-size: 0.55rem;
    font-weight: bold;
    color: rgba(210, 210, 210, 1);
`;

const MarketComponent = ({onClick, market}) => {
    return(
        <>
            <MarketWrap onClick={onClick}>
                <MarketDetailWrap>
                    <MarketName>{market.name}</MarketName>
                    <MarketDetail>서울특별시 마포구</MarketDetail>
                    <MarketDetail>포은로 6길 27</MarketDetail>
                </MarketDetailWrap>
                <MarketImg src={market.photo}/>
            </MarketWrap>
        </>
    )
}

export default MarketComponent;