import React from 'react';
import style from 'styled-components';
import delivery from '../../assets/icon/delivery.svg';
import coupon from '../../assets/icon/coupon.svg';
import conversation from '../../assets/icon/Slice 2@2x.png';
import point from '../../assets/icon/point@2x.png'

const IconContainer = style.div`
    width: 90vw;
    height: 25vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    margin-bottom: 5vw;
    background-color: white;
    border-bottom: 1px solid rgba(187,187,187,1);
`;
const Item = style.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;
const Icon = style.img`
    width: 10vw;
    height: 10vw;
    background-color: white;
`;
const Text = style.div`
    background-color: white;
    color: rgba(187,187,187,1);
    display:flex;
    flex-direction:row;
    align-items:center;
`;
const Text_ = style.div`
    color: rgba(249,210,86,1);
    margin: 0 0 0 5px;
`;

const IconComponent = () => {
    return(
        <IconContainer>
            <Item>
                <Icon src={delivery}/>   
                <Text>배송</Text>
            </Item>
            <Item>
                <Icon src={conversation}/>
                <Text>마이리뷰</Text>
            </Item>
            <Item>
                <Icon src={coupon}/> 
                <Text>쿠폰<Text_> 3</Text_></Text>
            </Item>
            <Item>
                <Icon src={point}/>
                <Text>포인트<Text_> 1,279</Text_></Text>
            </Item>
        </IconContainer>
    )
}

export default IconComponent;