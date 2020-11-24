import style from 'styled-components';
import MarketComponent from './MarketComponent';
import MarketContainer from '../../containers/Location/MarketContainer';

const Wrap = style.div`
    position:absolute;
    top: 40vw;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(248, 246, 250, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListWrap = style.div`
    width: 94vw;
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
    margin-top: 7vw;
    background-color: rgba(248, 246, 250, 1);
`;

const Space = style.div`
    width: 100vw;  
    height: 5vw; 
`;


const MarketListComponent = ({history}) => {
    return(
        <>
            <Wrap>
                <ListWrap>
                    <MarketContainer history={history} />
                    <MarketContainer history={history} />
                    <MarketContainer history={history} />
                    <MarketContainer history={history} />
                    <MarketContainer history={history} />
                    <MarketContainer history={history} />
                    <MarketContainer history={history} />
                    <MarketContainer history={history} />
                    <Space />
                </ListWrap>
            </Wrap>
        </>
    )
}

export default MarketListComponent;