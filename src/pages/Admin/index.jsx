import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Table from "./components/Table";


function Admin() {
    const [active, setactive] = useState('bookings');

    useEffect(() => {
    }, []);
    return (<div className="Admin ">
        <Navbar active={active} setactive={setactive} />
        <Table active={active} />

    </div>)
}

export default Admin