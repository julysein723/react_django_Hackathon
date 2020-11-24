import CustomListComponent from '../../components/Post/CustomListComponent';
import CustomContainer from './CustomContainer';
import {useSelector} from 'react-redux';

const price = 9800;

const CustomListContainer = ({materials}) => {
    const {post} = useSelector(state => ({
        post: state.PostChange.post,
    }))
    
    return(
        <>
            <CustomListComponent price={post.price} materials={materials}/>
        </>
    )
}

export default CustomListContainer;