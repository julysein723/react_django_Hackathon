import MarketListComponent from '../../components/Location/MarketListComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MarketListContainer = ({history}) => {
    const [markets, setMarkets] = useState([]);
    useEffect(() => {
        async function get() {
            const axiosMarkets = await axios.get('http://127.0.0.1:8000/market/market');
            console.log('통신 : ', axiosMarkets);
            const markets = axiosMarkets.data;
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