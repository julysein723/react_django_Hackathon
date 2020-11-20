// 장바구니 페이지
import UnderBarContainer from '../containers/Main/UnderBarContainer';


const CartPage = ({history, location}) => {
    return(
        <div>
            장바구니 페이지입니다
            <UnderBarContainer history={history} location={location} />
        </div>
    )
}

export default CartPage;