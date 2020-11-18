import HeaderContainer from '../../containers/Main/HeaderContainer';
import MiddleMenuContainer from '../../containers/Main/MiddleMenuConstainer';
import UnderBarContainer from '../../containers/Main/UnderBarContainer';
import PostListContainer from '../../containers/Main/PostListContainer';

const MealPage = () => {
    return(
        <div>
            <HeaderContainer />
            <MiddleMenuContainer />
            <PostListContainer />
        </div>
    );
}

export default MealPage;