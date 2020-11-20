import CustomComponent from '../../components/Post/CustomComponent';
import {useDispatch,useSelector} from 'react-redux';
import { clickMinus, clickPlus } from '../../modules/CustomBtnClick';


const CustomContainer = () => {
    const dispatch = useDispatch();
    const {value} = useSelector(state => ({
        value: state.CustomBtnClick.value,
    }));   
    

    const onHandleClickMinus = () => {
        if(value > 1){
            dispatch(clickMinus(value));
        }
    }

    const onHandleClickPlus= () => {
        dispatch(clickPlus(value));
    }

    return(
        <>
            <CustomComponent 
                onClickMinus={onHandleClickMinus}
                onClickPlus={onHandleClickPlus}
                value={value}
            />
        </>
    )
}

export default CustomContainer;