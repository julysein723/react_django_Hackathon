import React, {useState} from 'react';
import style from 'styled-components';

const HeaderWrap = style.div`
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100vw;
    height: 20vw;
    background-color: rgba(48, 119, 86, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0vw 2vw 7vw 0 rgba(0, 0, 0, 0.3);
`;


const Text = style.div`
    color: rgba(249, 210, 86, 1);
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 7vw;
`;


const HeaderComponent = () => {
    return(
        <>
            <HeaderWrap>
                <Text>마이페이지</Text>
            </HeaderWrap>
        </>
    )
}


export default HeaderComponent;