import style from 'styled-components';
import home from '../../assets/icon/home.svg';
import home_hover from '../../assets/icon/home_hover.svg';
import conversation from '../../assets/icon/conversation.svg';
import conversation_hover from '../../assets/icon/conversation_hover.svg';
import shopping_cart from '../../assets/icon/shopping-cart.svg';
import shopping_cart_hover from '../../assets/icon/shopping-cart_hover.svg';
import user from '../../assets/icon/user.svg';
import user_hover from '../../assets/icon/user_hover.svg';


const BarWrap = style.nav`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 17vw;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const BarMenu = style.img`
    width: 7vw;
    height: 7vw;
    display:${props=>(
        (props.isClick == props.id)? 
            ((props.isHover==true)? 'box': 'none') : 
            ((props.isHover==true)? 'none' : 'box') 

    )};
`;


const UnderBarComponent = ({HandleMain, HandleCommunity, HandleCart, HandleMy, value}) => {
    return(
        <>
            <BarWrap>
                <BarMenu src={home} onClick={HandleMain} isClick={value} id={0} isHover={false}/>
                <BarMenu src={home_hover} onClick={HandleMain} isClick={value} id={0} isHover={true}/>
                <BarMenu src={conversation} onClick={HandleCommunity} isClick={value} id={1} isHover={false}/>
                <BarMenu src={conversation_hover} onClick={HandleCommunity} isClick={value} id={1} isHover={true}/>
                <BarMenu src={shopping_cart} onClick={HandleCart} isClick={value} id={2} isHover={false}/>
                <BarMenu src={shopping_cart_hover} onClick={HandleCart} isClick={value} id={2} isHover={true}/>
                <BarMenu src={user} onClick={HandleMy} isClick={value} id={3} isHover={false}/>
                <BarMenu src={user_hover} onClick={HandleMy} isClick={value} id={3} isHover={true}/>
            </BarWrap>
        </>
    );
}

export default UnderBarComponent;