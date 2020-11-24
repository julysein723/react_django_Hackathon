import PriceComponent from '../../components/Post/PriceComponent';

const price = 9800;

const PriceContainer = ({history}) => {
    return(
        <>  
            <PriceComponent price={price} history={history}/>
        </>
    )
}

export default PriceContainer;