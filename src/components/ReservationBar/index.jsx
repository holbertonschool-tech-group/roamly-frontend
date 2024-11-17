import { FaChevronDown } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react'
import PropTypes from 'prop-types';
import './style.scss'
function ReservationBar({ home }) {
    const [active, setactive] = useState('hotel');
    function handleSection(value) {
        setactive(value)
    }
    const [date, setDate] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <div className='ReservationBar container'
            style={{ marginTop: home ? '-100px' : '7rem' }}
        >
            {home &&
                <div className="controls">
                    <button className={active == 'tour' && 'activeBtn'} onClick={() => {
                        handleSection('tour')
                    }}>Search Tour</button>
                    <button className={active == 'hotel' && 'activeBtn'} onClick={() => {
                        handleSection('hotel')
                    }}>Hotel</button>
                </div>}
            <form action="" style={{ borderTopLeftRadius: home && 0 }}>
                <div className="input">
                    <div className='title'> Destination</div >
                    <div className="field">
                        <IoSearch fill="#0000001a" size={20} />
                        <input type="text" placeholder={"Search place"} />
                    </div>
                </div>
                <div className="input">
                    <div className="title">Check-in date</div>
                    <div className="field">
                        <FaRegCalendarAlt fill="#0000001a" size={20} />
                        <input
                            type="date"
                            value={date}
                            placeholder="Check-in date"
                            // onChange={handleDateChange}
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = 'text')}
                        />
                    </div>
                </div>
                <div className="input">
                    <div className='title'>Check-out date</div >
                    <div className="field">
                        <FaRegCalendarAlt fill="#0000001a" size={20} />
                        <input
                            type="date"
                            value={date}
                            placeholder="Check-out date"
                            // onChange={handleDateChange}
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = 'text')}
                        /></div>
                </div>
                <div className="input">
                    <div className='title' > Price Limit</div >

                    <div className="field">
                        <FaChevronDown fill="#0000001a" size={20} />
                        <select name="price" id="price">
                            <option value="100">100</option>
                            <option value="100">200</option>
                            <option value="100">300</option>
                            <option value="100">400</option>
                            <option value="100">500</option>
                            <option value="100">600</option>
                            <option value="100">700</option>
                        </select>
                    </div>
                </div>

                <button className='search'>Search</button>
            </form>
        </div>
    )
}
ReservationBar.propTypes = {
    home: PropTypes.bool,
};

export default ReservationBar
