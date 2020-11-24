// 시장 선택하는 페이지
import MarketContainer from '../containers/Location/MarketContainer';
import HeaderContainer from '../containers/Location/HeaderContainer';
import MarketListContainer from '../containers/Location/MarketListContainer';
import LoadingComponent from '../../components/Main/LoadingComponent';

const LocationPage = ({history}) => {
    return(
        <>
            <LoadingComponent />
            <HeaderContainer />
            <MarketListContainer history={history}/>
        </>
    )
}

export default LocationPage;