import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Table from "./components/Table";
import Login from "./components/Login";


function Admin() {
    const [active, setactive] = useState('bookings');

    useEffect(() => {
    }, []);
    return (<div className="Admin ">
        {
            localStorage.getItem('login') ? <>

                <Navbar active={active} setactive={setactive} />
                <Table active={active} />
            </> : <Login />
        }

    </div>)
}

export default Admin