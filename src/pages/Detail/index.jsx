import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { IoCar } from "react-icons/io5";

import { FaBath, FaStar } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

import { useLocation, useParams } from "react-router-dom";


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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Navigation, Pagination } from "swiper/modules";
import AskQuote from "../../components/AskQuote";
import CommentModal from "../../components/CommentModal";
import OrderModal from "../../components/OrderModal";
import { fetchDestinations } from "../../redux/slice/destinationSlice";
import { fetchHotels } from "../../redux/slice/hotelSlice";

function Detail() {
    const { id } = useParams();
    const location = useLocation();
    const [openOrder, setOpenOrder] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const getCategoryFromUrl = () => {
        const params = new URLSearchParams(location.search);
        return params.get('category');
    };

    const category = getCategoryFromUrl();

    // <p>ID: {id}</p>
    const handleClose = () => {
        setOpenOrder(false);
    }
    const handleCloseOrder = () => {
        setOpenComment(false);
    }

    const [inFavorites, setinFavorites] = useState(false);
    const dispatch = useDispatch()

    const hotels = useSelector(state => state.hotel.hotels)
    const tours = useSelector(state => state.destination.destinations)
    const data =
        category == 'hotel' ?
            hotels.filter(elem => elem._id == id)[0] :
            tours.filter(elem => elem._id == id)[0]
    useEffect(() => {
        dispatch(fetchHotels())
        dispatch(fetchDestinations())
    }, [dispatch]);

    const favs = JSON.parse(localStorage.getItem('favorites')) || []
    useEffect(() => {
        setinFavorites(favs.find(elem => elem.id == id && elem.category == category))

    }, [id]);

    function handleFav() {
        if (inFavorites) {
            const removedFavs = favs.filter(elem => elem.id != id)
            localStorage.setItem('favorites', JSON.stringify(removedFavs))
            setinFavorites(false)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Removed from favorites",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            const elem = {
                category: category,
                id: id
            }
            const addedFavs = [...favs, elem]
            localStorage.setItem('favorites', JSON.stringify(addedFavs))
            setinFavorites(true)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added to favorites",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <>{
            data &&
            <>
                <>
                    {
                        openOrder && <OrderModal handleClose={handleClose} data={data} />
                    }
                </>
                {
                    openComment && <CommentModal handleClose={handleCloseOrder} data={data} />
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
                        {data.img?.map((img) => {
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
                            ({data?.review})
                        </div>
                    </div>
                    <div className="location">
                        <FaLocationDot /> {data.location}
                    </div>
                    <div className="info">
                        <div className="description">
                            {data?.description}
                        </div>
                        <div className="book">
                            <div className="texts">
                                <div className="head">
                                    <h2>Reserve</h2>
                                    <div className="like" onClick={() => {
                                        handleFav()
                                    }}>
                                        {
                                            inFavorites ? <FaHeart color="red" /> : <FaRegHeart />
                                        }

                                    </div>
                                </div>
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
                                    <p>total</p> <h4>${data.price}</h4>
                                </div>
                            </div>
                            <button onClick={() => {
                                setOpenOrder(true)
                            }}>Order</button>
                        </div>
                    </div>
                    <div className="categories">
                        <h3>Categories:</h3>
                        <ul>

                            {data?.categories?.map((category) => {
                                return (
                                    <li key={uuidv4()}>
                                        <div className="head">
                                            <p> {category.name}</p> <p> {category.rating}</p>
                                        </div>
                                        <div className="line">
                                            <div
                                                className="current"
                                                style={{
                                                    width: `${category.rating * 10}%`
                                                }}
                                            />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="feedbacks">
                        <div className="heading">
                            <h3>Guests who stayed here loved:</h3>
                            <button onClick={() => {
                                setOpenComment(true)
                            }}>
                                Add a review
                            </button>
                        </div>

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
                            {data?.comments?.map((review) => {
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
        }
        </>
    );
}

export default Detail;
