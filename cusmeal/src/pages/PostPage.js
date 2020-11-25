// 특정 음식 선택했을 때 뜨는 페이지
import MenuDetailContainer from '../containers/Post/MenuDetailContainer';
import PriceContainer from '../containers/Post/PriceContainer';
import CustomListContainer from '../containers/Post/CustomListContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

const PostPage = ({history}) => {
    const [materials, setMaterials] = useState([]);
    useEffect(() => {
        async function get() {
            const axiosMaterials = await axios.get('http://127.0.0.1:8000/mealkit/material/');
            //console.log('통신 : ', axiosPosts);
            const materials = axiosMaterials.data;
            setMaterials(materials);
            //console.log(materials);
        };
        get();
    }, [])
    
    return(
        <div>
            <MenuDetailContainer />
            <CustomListContainer materials={materials}/>
            <PriceContainer history={history}/>
        </div>
    )
}

export default PostPage;