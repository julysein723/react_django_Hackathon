import MarketComponent from '../../components/Location/MarketComponent';


const MarketContainer = ({history}) => {
    const onHandleClick = (e) => {
        e.preventDefault();
        console.log(history);
        history.push('/main');
    }

    return(
        <>
            <MarketComponent onClick={onHandleClick}/>
        </>
    )
}

export default MarketContainer;