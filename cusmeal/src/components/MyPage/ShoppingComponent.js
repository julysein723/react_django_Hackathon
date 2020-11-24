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
    margin-bottom: 20pt;
    background-color: white;
`;

const Title = style.div`
    font-size: 13px;
    color: rgba(187,187,187,1);
    margin-bottom: 18px;
`;


const Text = style.div`
    font-size: 16px;
    color: black;
    margin-bottom: 10px;
`;


const ShoppingComponent = () => {
    return(
        <Menu>
            <Title> 쇼핑 </Title>
            <Text>주문내역</Text>
            <Text>최근 본 상품</Text>
        </Menu>
    )
}

export default ShoppingComponent;