import React from "react";
import './Hero.css';
import { Paper } from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";

const Home = ({enhancements}) => {
    return (
        <div>
            <Swiper spaceBetween={50} slidesPerView={3}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Home;