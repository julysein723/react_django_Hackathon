import React from 'react';
import style from 'styled-components';
import ProfileComponent from './ProfileComponents';
import IconComponent from './IconComponent';
import ShoppingComponent from './ShoppingComponent';
import FAQComponent from './FAQComponent';

const Wrap = style.div`
    top: 80px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px;
    background-color: white;
`;

const MyPageComponent = () => {
    return(
        <Wrap>
            <ProfileComponent />
            <IconComponent />
            <ShoppingComponent />
            <FAQComponent />
        </Wrap>
    )
}

export default MyPageComponent;