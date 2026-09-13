import React from "react";
import './Hero.css';
import { Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Home = ({enhancements}) => {
    return (
        <div className={"hero-container"}>
            <Swiper spaceBetween={100} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                    {enhancements.map((enhancement) => {
                        return (
                            <SwiperSlide key={enhancement.imdb}>
                                <Paper>
                                    <div className={"enhancement-card-container"}>
                                        <div className={"enhancement-card"}>
                                            <div className={"enhancement-detail"}>
                                                <div className={"enhancement-poster"}>
                                                    <img src={enhancement.poster} alt={""}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className={"enhancement-title"}>{enhancement.title}</h3>
                                    <p className={"enhancement-description"}>{enhancement.description}</p>
                                </Paper>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
        </div>
    );
}

export default Home;