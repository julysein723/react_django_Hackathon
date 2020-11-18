import UnderBarComponent from '../../components/Main/UnderBarComponent';
import {useDispatch,useSelector} from 'react-redux';
import {menuMain, menuCommunity, menuCart, menuMy} from '../../modules/UnderBarSelect';

const UnderBarContainer = ({match, history, location}) => {
    const dispatch = useDispatch();
    const {value} = useSelector(state => ({
        value: state.UnderBarSelect.value,
    }));

    const onHandleMainClick = (e) => {
        e.preventDefault();
        dispatch(menuMain(value));
        history.push('/main');
    }
    const onHandleCommunityClick = (e) => {
        e.preventDefault();
        dispatch(menuCommunity(value));
        history.push('/community');
    }
    const onHandleCartClick = (e) => {
        e.preventDefault();
        dispatch(menuCart(value));
        history.push('/cart');
    }
    const onHandleMyClick = (e) => {
        e.preventDefault();
        dispatch(menuMy(value));
        history.push('/my');
    }

    return(
        <>
            <UnderBarComponent 
                HandleMain={onHandleMainClick} 
                HandleCommunity={onHandleCommunityClick} 
                HandleCart={onHandleCartClick} 
                HandleMy={onHandleMyClick} 
                value={value}
            />
        </>
    );
}

export default UnderBarContainer;