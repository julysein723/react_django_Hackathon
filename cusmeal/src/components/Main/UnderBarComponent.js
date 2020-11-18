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
    box-shadow: 0vw 0vw 7vw 0 rgba(0, 0, 0, 0.3);
`;

const BarMenu = style.img`
    width: 7vw;
    height: 7vw;
    display:${props=>(
        (props.pathname == props.id)? 
            ((props.isHover==true)? 'box': 'none') : 
            ((props.isHover==true)? 'none' : 'box') 

    )};
`;


const UnderBarComponent = ({HandleMain, HandleCommunity, HandleCart, HandleMy, pathname}) => {
    return(
        <>
            <BarWrap>
                <BarMenu src={home} pathname={pathname} onClick={HandleMain} id={'/main'} isHover={false}/>
                <BarMenu src={home_hover} pathname={pathname} onClick={HandleMain} id={'/main'} isHover={true}/>
                <BarMenu src={conversation} pathname={pathname} onClick={HandleCommunity} id={'/community'} isHover={false}/>
                <BarMenu src={conversation_hover} pathname={pathname} onClick={HandleCommunity} id={'/community'} isHover={true}/>
                <BarMenu src={shopping_cart} pathname={pathname} onClick={HandleCart} id={'/cart'} isHover={false}/>
                <BarMenu src={shopping_cart_hover} pathname={pathname} onClick={HandleCart} id={'/cart'} isHover={true}/>
                <BarMenu src={user} pathname={pathname} onClick={HandleMy} id={'/my'} isHover={false}/>
                <BarMenu src={user_hover} pathname={pathname} onClick={HandleMy} id={'/my'} isHover={true}/>
            </BarWrap>
        </>
    );
}

export default UnderBarComponent;