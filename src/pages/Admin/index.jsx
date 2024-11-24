import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Table from "./components/Table";
import Login from "./components/Login";
import AddPost from "./components/AddPost";


function Admin() {
    const [active, setactive] = useState('bookings');

    useEffect(() => {
    }, []);
    return (<div className="Admin ">
        {
            localStorage.getItem('login') ? <>

                <Navbar active={active} setactive={setactive} />

                {
                    active == 'add' ? <AddPost /> :
                        <Table active={active} />
                }
            </> : <Login />
        }

    </div>)
}

export default Admin