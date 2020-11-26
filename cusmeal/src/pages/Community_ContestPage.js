// 커뮤니티 페이지
import UnderBarContainer from '../containers/Main/UnderBarContainer';
import HeaderContainer from '../containers/Community/HeaderContainer';
import MiddleMenuContainer from '../containers/Community/MiddleMenuContainer';
import ContestContainer from '../containers/Community/ContestContainer';
const Community_ContestPage = ({history, location}) => {
    return(
        <div>
            <HeaderContainer />
            <MiddleMenuContainer />
            <ContestContainer/>
            <UnderBarContainer history={history} location={location} />
        </div>
    )
}

export default Community_ContestPage;