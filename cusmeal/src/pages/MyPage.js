import UnderBarContainer from '../containers/Main/UnderBarContainer';

const MyPage = ({history, location}) => {
    return(
        <div>
            mypage입니다.
            <UnderBarContainer history={history} location={location} />
        </div>
    )
}

export default MyPage;