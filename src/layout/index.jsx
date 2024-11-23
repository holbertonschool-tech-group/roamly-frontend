import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
    const location = useLocation()
    return (
        <>
            {
                location.pathname != '/admin' &&
                <Navbar />
            }
            <Outlet />
            {
                location.pathname != '/admin' &&
                <Footer />
            }
        </>
    )
};

export default Layout;