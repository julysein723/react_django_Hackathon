// 시장 선택하는 페이지
import MarketContainer from '../containers/Location/MarketContainer';
import HeaderContainer from '../containers/Location/HeaderContainer';
import MarketListContainer from '../containers/Location/MarketListContainer';

const LocationPage = ({history}) => {
    return(
        <div>
            <HeaderContainer />
            <MarketListContainer history={history}/>
        </div>
    )
}

export default LocationPage;