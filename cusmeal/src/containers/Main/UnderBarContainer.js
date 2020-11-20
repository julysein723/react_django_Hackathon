import UnderBarComponent from '../../components/Main/UnderBarComponent';


const UnderBarContainer = ({history, location}) => {

    const onHandleMainClick = (e) => {
        e.preventDefault();
        history.push('/main');
    }
    const onHandleCommunityClick = (e) => {
        e.preventDefault();
        history.push('/community');
    }
    const onHandleCartClick = (e) => {
        e.preventDefault();
        history.push('/cart');
    }
    const onHandleMyClick = (e) => {
        e.preventDefault();
        history.push('/my');
    }


    return(
        <>  
            <UnderBarComponent 
                HandleMain={onHandleMainClick} 
                HandleCommunity={onHandleCommunityClick} 
                HandleCart={onHandleCartClick} 
                HandleMy={onHandleMyClick} 
                pathname={location.pathname}
            />
        </>
    );
}

export default UnderBarContainer;