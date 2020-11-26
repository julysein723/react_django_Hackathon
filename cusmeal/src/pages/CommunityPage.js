// 홈 페이지
import Community from './Community_CommunityPage';
import Contest from './Community_ContestPage';
import {useSelector} from 'react-redux';

const CommunityPage = ({history, location}) => {
    const {value} = useSelector(state => ({
        value: state.CommunityMenuSelect.value,
    }));
    
    switch(value){
        case 0:
            return(
                <>
                    <Community history={history} location={location}/>
                </>
            );
        case 1:
            return(
                <>
                    <Contest history={history} location={location}/>
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

export default CommunityPage;