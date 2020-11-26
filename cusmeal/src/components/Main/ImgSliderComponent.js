import {Swiper, SwiperSlide} from 'swiper/react';
import style from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import img1 from '../../assets/ad.jpg';
import img2 from '../../assets/ad2.jpg';
import img3 from '../../assets/ad3.jpg';

const SwiperWrap = style.div`
    width: 90vw;
    height: 20vw;

`;

const Img = style.img`
    background-color: ${props=>props.color};
    width: 90vw;
    height: 20vw;
    border-radius: 4vw;
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ImgSliderComponent = () => {
    return(
        <>
            <SwiperWrap>
                <Swiper
                    spaceBetween={0}
                    slidesPerview={1}
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={true}
                >
                    <SwiperSlide><Img src={img1}/></SwiperSlide>
                    <SwiperSlide><Img src={img2}/></SwiperSlide>
                    <SwiperSlide><Img src={img3}/></SwiperSlide>
                </Swiper>
            </SwiperWrap>
        </>
    );
}

export default ImgSliderComponent;