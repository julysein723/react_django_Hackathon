import React from 'react';
import style from 'styled-components';

const Wrap = style.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Text = style.div`
    height: 100px;
    color: grey;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 7vw;
`;


const ContextComponent = () => {
    return(
        <>
            <Wrap>
                <Text>
                    콘테스트를 준비중입니다.<br/>
                    잠시만 기다려주세요.
                </Text>
            </Wrap>
        </>
    );
}

export default ContextComponent;