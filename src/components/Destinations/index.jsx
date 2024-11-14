
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import FooterImg from '../../assets/images/footer.png'


// import required modules
import { Pagination } from 'swiper/modules';
import { cards } from "./card";
function Destinations() {
    return (
        <div className="Destinations " style={{ backgroundImage: `url(${FooterImg})` }}>
            <div className="">

                <p>Pacific Provide Places</p>
                <h1>Select Your Destination</h1>
                <div className="swiperContainer">

                    <Swiper

                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        initialSlide={2}
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
                        {cards.map(card => {
                            return <SwiperSlide key={card.title} className="card" style={{ backgroundImage: `url(${card.img})` }}>
                                <div className="text">
                                    <h1>{card.title}</h1>
                                    <span>{card.count} Tours</span>
                                </div>


                            </SwiperSlide>
                        })
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Destinations;
