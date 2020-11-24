import UnderBarContainer from '../containers/Main/UnderBarContainer';
import HeaderContainer from '../containers/MyPage/HeaderContainer';

const MyPage = ({history, location}) => {
    return(
        <div>
            <HeaderContainer />
            <UnderBarContainer history={history} location={location} />
        </div>
    )
}

export default MyPage;