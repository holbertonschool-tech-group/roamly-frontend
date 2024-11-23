import { LuLogOut } from "react-icons/lu";
import './style.scss'
function Navbar({ active, setactive }) {
    const handleLogin = () => {
        localStorage.removeItem('login');
        window.location.reload();
    }
    return (
        <div className='AdminNavbar '>

            <div className="container">

                <h1>

                    Admin
                </h1>
                <div className="navs">
                    <button className={active == 'bookings' ? 'active' : ''} onClick={() => {
                        setactive('bookings')
                    }}>Bookings</button>
                    <button className={active == 'hotels' ? 'active' : ""} onClick={() => {
                        setactive('hotels')
                    }}>Hotels</button>
                    <button className={active == 'destinations' ? 'active' : ""} onClick={() => {
                        setactive('destinations')
                    }}>Destinations</button>
                    <button onClick={handleLogin}>
                        <LuLogOut />
                    </button>



                </div>
            </div>
        </div>
    )
}

export default Navbar