import HeaderContainer from '../../containers/Main/HeaderContainer';
import MiddleMenuContainer from '../../containers/Main/MiddleMenuConstainer';
import PostListContainer from '../../containers/Main/PostListContainer';
import UnderBarContainer from '../../containers/Main/UnderBarContainer';

const ToolPage = ({history, location}) => {
    return(
        <div>
            <HeaderContainer />
            <MiddleMenuContainer />
            <PostListContainer history={history}/>
            <UnderBarContainer history={history} location={location}/>
        </div>
    );
}

export default ToolPage;