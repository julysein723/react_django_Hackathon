import style from 'styled-components';
import food from '../../assets/image/5.png';
import { useSelector} from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Wrap = style.div`
    width: 100vw;
    height: 63vw;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(248, 246, 250, 1);
    box-shadow: 0vw 1vw 7vw 0 rgba(0, 0, 0, 0.3);
`;

const MenuImg = style.img`
    width: 70vw;
    height: 45vw;
    margin-top: 1vw;
`;

const MenuName = style.div`
    font-size: 1rem;
    font-weight: 900;
`;

const MenuDetail = style.div`
    font-size: 0.55rem;
    font-weight: bold;
    color: rgba(210, 210, 210, 1);
`;

const MenuSign = style.div`
    font-size: 0.55rem;
    font-weight: 700;
    color: rgba(249, 210, 86, 1);
    display: ${props => props.signiture ? 'block' : 'none'};
`;

const MenuDetailComponent = () => {
    const {post} = useSelector(state => ({
        post: state.PostChange.post,
    }));

    return(
        <>
            <Wrap>
                <MenuImg src={post.photo}/>
                <MenuSign signiture={post.signiture}>Signature</MenuSign>
                <MenuName>{post.name}</MenuName>
                <MenuDetail>{post.detail}</MenuDetail>
            </Wrap>
        </>
    )
}

export default MenuDetailComponent;