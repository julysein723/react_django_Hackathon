import CustomListComponent from '../../components/Post/CustomListComponent';
import CustomContainer from './CustomContainer';

const price = 9800;

const CustomListContainer = () => {
    return(
        <>
            <CustomListComponent price={price}/>
        </>
    )
}

export default CustomListContainer;