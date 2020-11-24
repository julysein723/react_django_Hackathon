import React from 'react';
import style from 'styled-components';

const Menu = style.div`
    width: 90vw;
    border-radius: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 20pt;
    background-color: white;
`;

const Title = style.div`
    font-size: 13px;
    color: rgba(187,187,187,1);
    margin-bottom: 18px;
    fontWeight: bold;
`;


const Text = style.div`
    font-size: 16px;
    color: black;
    margin-bottom: 10px;
    fontWeight: bold;
`;


const FAQComponent = () => {
    return(
        <Menu>
            <Title> 고객센터 </Title>
            <Text>공지사항</Text>
            <Text>앱 문의 및 건의</Text>
        </Menu>
    )
}

export default FAQComponent;