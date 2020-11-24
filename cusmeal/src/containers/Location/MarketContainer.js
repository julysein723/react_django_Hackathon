import MarketComponent from '../../components/Location/MarketComponent';


const MarketContainer = ({history, market}) => {
    const onHandleClick = (e) => {
        e.preventDefault();
        console.log(history);
        history.push('/main');
    }

    return(
        <>
            <MarketComponent onClick={onHandleClick} market={market}/>
        </>
    )
}

export default MarketContainer;