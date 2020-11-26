// 커뮤니티 페이지
import UnderBarContainer from '../containers/Main/UnderBarContainer';
import HeaderContainer from '../containers/Community/HeaderContainer';
import MiddleMenuContainer from '../containers/Community/MiddleMenuContainer';
import CommunityContainer from '../containers/Community/CommunityContainer';
const Community_CommunityPage = ({history, location}) => {
    return(
        <div>
            <HeaderContainer />
            <MiddleMenuContainer />
            <CommunityContainer/>
            <UnderBarContainer history={history} location={location} />
        </div>
    )
}

export default Community_CommunityPage;