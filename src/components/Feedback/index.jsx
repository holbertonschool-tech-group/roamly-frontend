import { FaStar } from "react-icons/fa";

import './style.scss'
import { v4 as uuidv4 } from 'uuid';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { feedbacks } from './datas';
function Feedback() {
    return (
        <div className='Feedback '>
            <div className="container">

                <div className="sub">Testimonial</div>
                <div className='head'>Tourist Feedback</div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {
                        feedbacks.map(elem => {
                            return <SwiperSlide className='card' key={uuidv4()}>
                                <div className="stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className="user">
                                    <img src={elem.img} alt="" />
                                    <div className="info">
                                        <h1>{elem.name}</h1>
                                        <p>{elem.position}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            <div className="overlay"></div>


        </div>
    )
}

export default Feedback