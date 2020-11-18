// 홈 페이지
import MealPage from './MealPage';
import GradPage from './GradPage';
import ToolPage from './ToolPage';
import {useSelector} from 'react-redux';

const MainPage = () => {
    const {value} = useSelector(state => ({
        value: state.MiddleMenuSelect.value,
    }));
    
    switch(value){
        case 0:
            return(
                <>
                    <MealPage />
                </>
            );
        case 1:
            return(
                <>
                    <GradPage />
                </>
            );
        case 2:
            return(
                <>
                    <ToolPage />
                </>
            );
        default:
            return(
                <div>
                    오류발생
                </div>
            );
    }
}

export default MainPage;