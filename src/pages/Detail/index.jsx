import { IoCar } from "react-icons/io5";
import { FaBath, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { tours } from "./data";
import { v4 as uuidv4 } from "uuid";
import './style.scss';
import { IoIosBed } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
function Detail() {
    const { id } = useParams();
    // <p>ID: {id}</p>
    const data = tours[0]
    return (
        <div className="detailPage container">
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="imgs"
                loop={true}
            >
                {
                    data.imgs.map(img => {
                        return <SwiperSlide key={uuidv4()}>  <img src={img} alt="" /></SwiperSlide>

                    })
                }

            </Swiper>

            <div className="head">
                <h1>{data.title}</h1>
                <div className="stars">
                    <div className="icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    (5.0)
                </div>
            </div>
            <div className="location">
                <FaLocationDot />
                {data.location}
            </div>
            <div className="info">
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore porro pariatur perspiciatis ullam animi, illo sed fugiat impedit, minima nulla? Optio pariatur perspiciatis iure quaerat omnis tempore itaque possimus expedita explicabo blanditiis molestiae tempora ea, est error natus voluptatibus modi cupiditate accusantium fuga aut suscipit saepe provident! Similique optio autem quidem cupiditate iure obcaecati soluta voluptatem beatae quo quae iusto nisi deleniti, at ipsam, facere impedit eos nobis accusamus vel fugiat maiores qui. Quae quidem exercitationem odit maiores quam numquam minus totam delectus, nostrum odio voluptatibus, laudantium neque in ullam atque non ex explicabo reprehenderit, quasi voluptatum expedita. Magnam.
                </div>
                <div className="book">
                    <div className="texts">
                        <h2>Reserve</h2>
                        <ul>
                            <li>
                                < IoIosBed size={20} />
                                {data.bathrooms}{" "}
                                bathrooms
                            </li>
                            <li>
                                <FaBath size={20} />
                                {data.bedrooms}{" "}
                                bedrooms
                            </li>
                            <li>
                                < IoCar size={20} />{" "}
                                Free Parking
                            </li>
                        </ul>
                        <div className="price">
                            <p>total</p> <h4>${data.price}</h4>
                        </div>
                    </div>
                    <button>Order</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
