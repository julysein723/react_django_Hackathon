// 장바구니 페이지
import UnderBarContainer from '../containers/Main/UnderBarContainer';
import HeaderContainer from '../containers/Cart/HeaderContainer';
import PostListContainer from '../containers/Cart/PostListContainer';
import PriceComponent from '../components/Cart/PriceComponent';

const price = 11800;

const CartPage = ({history, location}) => {
    return(
        <div>
            <HeaderContainer />
            <PostListContainer />
            <PriceComponent price={price}/>
            {
                //<UnderBarContainer history={history} location={location} />
            }
        </div>
    )
}

export default CartPage;