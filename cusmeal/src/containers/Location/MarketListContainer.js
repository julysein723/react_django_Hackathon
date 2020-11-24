import MarketListComponent from '../../components/Location/MarketListComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MarketListContainer = ({history}) => {
    const [markets, setMarkets] = useState([]);
    useEffect(() => {
        async function get() {
            const axiosPosts = await axios.get('http://127.0.0.1:8000/market/market');
            console.log('통신 : ', axiosPosts);
            const markets = axiosPosts;
            setMarkets(markets);
        };
        get();
    }, [])
    
    return(
        <>
            <MarketListComponent history={history} markets={markets}/>
        </>
    )
}

export default MarketListContainer;