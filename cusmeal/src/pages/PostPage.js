// 특정 음식 선택했을 때 뜨는 페이지
import MenuDetailContainer from '../containers/Post/MenuDetailContainer';
import PriceContainer from '../containers/Post/PriceContainer';
import CustomListContainer from '../containers/Post/CustomListContainer';

const PostPage = () => {
    return(
        <div>
            <MenuDetailContainer />
            <CustomListContainer />
            <PriceContainer />
        </div>
    )
}

export default PostPage;