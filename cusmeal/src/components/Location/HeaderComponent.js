import React, {useState} from 'react';
import style from 'styled-components';
import search from '../../assets/icon/search.svg';

const HeaderWrap = style.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 40vw;
    background-color: rgba(48, 119, 86, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0vw 2vw 7vw 0 rgba(0, 0, 0, 0.3);
`;


const TextWrap = style.div`
    margin-top: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextMarket = style.div`
    color: rgba(249, 210, 86, 1);
    font-weight: bold;
    font-size: 1.2rem;
`;

const TextDetail = style.div`
    color: rgba(248, 246, 250, 1);
    font-weight: bold;
    font-size: 0.8rem;
`;


const SearchBarWrap = style.div`

`;


const SearchBar = style.input`
    -webkit-appearance: none; /* 네이티브 외형 감추기 */ 
    -moz-appearance: none; 
    appearance: none;
    padding-left: 11vw;
    width: 79vw;
    height: 8vw;
    border: 0.1rem solid rgba(248, 246, 250, 1);
    background-color: rgba(0,0,0,0);
    border-radius: 3.5vw;
    margin-top: 4vw;
    color: rgba(248, 246, 250, 1);
    &::placeholder{
        color:${(props) => ( props.isFocus ? 'rgba(248, 246, 250, 0)' : 'rgba(248, 246, 250, 1)')}; 
        font-size: 0.8rem;
        line-height: 1rem;
        font-weight: 600;
    }
    outline: none;
    font-size: 0.8rem;
    font-weight: 600;
`;

const SearchImg = style.img`
    width: 1rem;
    height: 1rem;
    position: absolute;
    z-index: 10;
    margin-top: 7vw;
    margin-left: 4vw;
`;


const HeaderComponent = () => {
    const [isFocus, setIsFocus] = useState(false);

    const onHandleFocus = () => {
        setIsFocus(true);
    }

    const onHandleBlur = () => {
        setIsFocus(false);
    }

    return(
        <>
            <HeaderWrap>
                <TextWrap>
                    <TextMarket>내 시장 검색</TextMarket>
                    <TextDetail>현위치에서 가까운 시장을 찾아보세요!</TextDetail>
                </TextWrap>
                <SearchBarWrap>
                    <SearchImg src={search}/>
                    <SearchBar 
                        placeholder="마포구 서교동 339-23 101호" 
                        isFocus={isFocus} 
                        onFocus={onHandleFocus}
                        onBlur={onHandleBlur}
                    />
                </SearchBarWrap>
            </HeaderWrap>
        </>
    );
}

export default HeaderComponent;