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
const SearchBarWrap = style.div`

`;

const SearchBar = style.input`
    -webkit-appearance: none; /* 네이티브 외형 감추기 */ 
    -moz-appearance: none; 
    appearance: none;
    padding-left: 11vw;
    width: 79vw;
    height: 8vw;
    border: 0.05rem solid rgba(248, 246, 250, 1);
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

const Text = style.div`
    color: rgba(249, 210, 86, 1);
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 7vw;
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
                <Text>커뮤니티</Text>
                <SearchBarWrap>
                    <SearchImg src={search}/>
                    <SearchBar 
                        placeholder="찾으시는 레시피가 있으신가요?" 
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