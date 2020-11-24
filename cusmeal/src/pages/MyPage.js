import UnderBarContainer from '../containers/Main/UnderBarContainer';
import HeaderContainer from '../containers/MyPage/HeaderContainer';
import ProfileContainer from '../containers/MyPage/ProfileContainer';

const MyPage = ({history, location}) => {
    return(
        <div>
            <HeaderContainer />
            <ProfileContainer/>
            <UnderBarContainer history={history} location={location} />
        </div>
    )
}

export default MyPage;