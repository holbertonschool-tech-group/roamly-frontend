import { IoCar } from "react-icons/io5";

import { FaBath, FaStar } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

import { useParams } from "react-router-dom";

import { categories, tours } from "./data";

import { v4 as uuidv4 } from "uuid";
import "./style.scss";

import { IoIosBed } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import AskQuote from "../../components/AskQuote";
import OrderModal from "../../components/OrderModal";

function Detail() {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    // <p>ID: {id}</p>
    const data = tours[0];
    const handleClose = () => {
        setOpen(false);

    }
    return (
        <>
            {
                open && <OrderModal handleClose={handleClose} data={data} />
            }
            <div className="detailPage container">
                <Swiper

                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="imgs"
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
                    {data.imgs.map((img) => {
                        return (
                            <SwiperSlide key={uuidv4()}>
                                <img src={img} alt="" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="head">
                    <h1> {data.title}</h1>
                    <div className="stars">
                        <div className="icons">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                        (5.0)
                    </div>
                </div>
                <div className="location">
                    <FaLocationDot /> {data.location}
                </div>
                <div className="info">
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore
                        porro pariatur perspiciatis ullam animi, illo sed fugiat impedit,
                        minima nulla? Optio pariatur perspiciatis iure quaerat omnis tempore
                        itaque possimus expedita explicabo blanditiis molestiae tempora ea,
                        est error natus voluptatibus modi cupiditate accusantium fuga aut
                        suscipit saepe provident ! Similique optio autem quidem cupiditate
                        iure obcaecati soluta voluptatem beatae quo quae iusto nisi deleniti,
                        at ipsam, facere impedit eos nobis accusamus vel fugiat maiores qui.
                        Quae quidem exercitationem odit maiores quam numquam minus totam
                        delectus, nostrum odio voluptatibus, laudantium neque in ullam atque
                        non ex explicabo reprehenderit, quasi voluptatum expedita. Magnam.
                    </div>
                    <div className="book">
                        <div className="texts">
                            <h2>Reserve</h2>
                            <ul>
                                <li>
                                    <IoIosBed size={20} /> {data.bathrooms}{" "}
                                    bathrooms
                                </li>
                                <li>
                                    <FaBath size={20} /> {data.bedrooms}{" "}
                                    bedrooms
                                </li>
                                <li>
                                    <IoCar size={20} /> Free Parking{" "}
                                </li>
                            </ul>
                            <div className="price">
                                <p>total</p> <h4>$ {data.price}</h4>
                            </div>
                        </div>
                        <button onClick={() => {
                            setOpen(true)
                        }}>Order</button>
                    </div>
                </div>
                <div className="categories">
                    <h3>Categories:</h3>
                    <ul>
                        {categories.map((category) => {
                            return (
                                <li key={uuidv4()}>
                                    <div className="head">
                                        <p> {category.title}</p> <p> {category.points / 10}</p>
                                    </div>
                                    <div className="line">
                                        <div
                                            className="current"
                                            style={{
                                                width: `${category.points}%`
                                            }}
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="feedbacks">
                    <h3>Guests who stayed here loved:</h3>
                    <Swiper
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="reviews"
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
                        {data.reviews.map((review) => {
                            return (
                                <SwiperSlide key={uuidv4()}>
                                    <div className="card">
                                        <div className="head">
                                            <div src="" alt="" className="img">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div className="about">
                                                <div className="name"> {review.name}</div>
                                                <div className="country"> {review.country}</div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            &apos;{review.content}
                                            &apos;
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <AskQuote />
        </>
    );
}

export default Detail;
