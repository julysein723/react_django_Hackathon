// 장바구니 페이지
import UnderBarContainer from '../containers/Main/UnderBarContainer';
import HeaderContainer from '../containers/Cart/HeaderContainer';
import PostListContainer from '../containers/Cart/PostListContainer';
import PriceComponent from '../components/Cart/PriceComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';


const price = 11800;

const CartPage = ({history, location}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function get() {
            const axiosPosts = await axios.get('http://127.0.0.1:8000/reservation/');
            //console.log('통신 : ', axiosPosts);
            const posts = axiosPosts.data;
            setPosts(posts);
        };
        get();
    }, [])

    const deletePost = async (id) => {
        try{
            const {data} = await axios.delete(`http://127.0.0.1:8000/reservation/reservation/${id}/`);
            console.log(data);
            return data.data;
        }
        catch(e){
            throw e;
        }
    }

    const onDelete = (id) => {
        posts = posts.filter(post => post.id !== id); 
        setPosts(posts);
    }
    
    return(
        <div>
            <HeaderContainer />
            <PostListContainer history={history} posts={posts} onDelete={onDelete} deletePost={deletePost}/>
            <PriceComponent posts={posts}/>
            {
                //<UnderBarContainer history={history} location={location} />
            }
        </div>
    )
}

export default CartPage;