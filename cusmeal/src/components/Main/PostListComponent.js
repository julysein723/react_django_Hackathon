import style from 'styled-components';
import PostContainer from '../../containers/Main/PostContainer';
import ImgSliderContainer from '../../containers/Main/ImgSliderContainer';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const Wrap = style.div`
    position:fixed;
    top: 40vw;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(248, 246, 250, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgSliderWrap = style.div`
    width: 90vw;
    height: 20vw;
    position: fixed;
    top: 43vw;
    background-color: red;
`;

const PostsWrap = style.div`
    overflow: hidden;
    width: 100vw;
    height: 150vw;
    position: fixed;
    top: 66vw;
    display:flex;
    align-items: center;

`;

const PostList = style.div`
    position: absolute;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Space = style.div`
    width: 100vw;  
    height: 3vw; 
`;

const PostListComponent = () => {
    return(
        <>
            <Wrap>
                <Space />
                <ImgSliderContainer />
                <PostsWrap>
                    <Swiper
                        spaceBetween={0}
                        slidesPerview={'auto'}
                        scrollbar={{ el: '.swiper-scrollbar', }}
                        mousewheel={true}
                        direction={'vertical'}
                        freeMode={true}
                    >
                        <SwiperSlide>
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                            <PostContainer />
                        </SwiperSlide>
                    </Swiper>
                </PostsWrap>
            </Wrap>
        </>
    );
}

export default PostListComponent;