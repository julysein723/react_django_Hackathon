// 커뮤니티 페이지
import UnderBarContainer from '../containers/Main/UnderBarContainer';

const CommunityPage = ({history, location}) => {
    return(
        <div>
            CommunityPage입니다.
            <UnderBarContainer history={history} location={location} />
        </div>
    )
}

export default CommunityPage;