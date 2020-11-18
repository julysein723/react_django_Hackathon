import MiddleMenuComponent from '../../components/Main/MiddleMenuComponent';
import {useDispatch,useSelector} from 'react-redux';
import {menuMeal, menuGrad, menuTool} from '../../modules/MiddleMenuSelect';

const MiddleMenuContainer = () => {
    const dispatch = useDispatch();
    const {value} = useSelector(state => ({
        value: state.MiddleMenuSelect.value,
    }));

    const onHandleMealClick = (e) => {
        e.preventDefault();
        dispatch(menuMeal(value));
    }
    const onHandleGradClick = (e) => {
        e.preventDefault();
        dispatch(menuGrad(value));
    }
    const onHandleToolClick = (e) => {
        e.preventDefault();
        dispatch(menuTool(value));
    }
    return(
        <>
            <MiddleMenuComponent 
                value={value}
                HandleMeal={onHandleMealClick}
                HandleGrad={onHandleGradClick}
                HandleTool={onHandleToolClick}
            />
        </>
    )
}

export default MiddleMenuContainer;