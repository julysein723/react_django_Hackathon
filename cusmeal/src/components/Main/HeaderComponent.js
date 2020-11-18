import React, {useState} from 'react';
import style from 'styled-components';
import search from '../../assets/icon/search.svg';
import downward from '../../assets/icon/downward.svg';


const HeaderWrap = style.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 30vw;
    background-color: rgba(48, 119, 86, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MarketSelectWrap = style.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const MarketForm = style.form`

`;

const MarketSelect = style.select`
    width: auto;
    border: none;
    margin-top: 7vw;
    padding-left: 2rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: rgba(248, 246, 250, 1);
    -webkit-appearance: none; /* 네이티브 외형 감추기 */ 
    -moz-appearance: none; 
    appearance: none;
    background: url(${downward}) no-repeat 1% 50%;
    background-size: 1.2rem 1.2rem;
    &::-ms-expand { 
        display: none; 
    }
    outline: none;
`;

const MarketOption = style.option`
    font-size: 0.8rem;
    color: black;
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
        font-size: 1rem;
        line-height: 1rem;
    }
    outline: none;
    font-size: 1rem;
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
                <MarketSelectWrap>
                    <MarketForm>
                        <MarketSelect>
                            <MarketOption>망원시장</MarketOption>
                            <MarketOption>석촌시장</MarketOption>
                            <MarketOption>가락시장</MarketOption>
                        </MarketSelect>
                    </MarketForm>
                </MarketSelectWrap>
                <SearchBarWrap>
                    <SearchImg src={search}/>
                    <SearchBar 
                        placeholder="먹고 싶은 밀키트 검색" 
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