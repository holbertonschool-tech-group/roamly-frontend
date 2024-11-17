import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { navs } from "./navs";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`Navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <Link to="/" className="brand">
                    <div className="title" style={{ color: scrolled && "#000000" }}>
                        Pacific
                    </div>
                    <p>Travel Agency</p>
                </Link>
                <nav>
                    {navs.map((nav) => (
                        <NavLink
                            className="nav"
                            to={nav.url}
                            key={uuidv4()}
                            style={({ isActive }) => ({
                                color: isActive ? "#f15d30" : scrolled ? "#000000" : "#ffffff"
                            })}
                        >
                            {nav.title}
                        </NavLink>
                    ))}
                </nav>
                <div className="mobileNav">
                    <button
                        className="menu"
                        onClick={handleNavCollapse}
                        style={{ color: scrolled }}
                    >
                        menu
                    </button>
                    <div
                        className={`${isNavCollapsed ? "smallNav collapse" : "smallNav "}`}
                        style={{
                            backgroundColor: scrolled
                                ? "#ffffff"
                                : "#000000"
                        }
                        }

                    >
                        <ul className="navbarMenu ">
                            {navs.map((nav) => (
                                <li className="nav-item active container" key={uuidv4()} onClick={handleNavCollapse}>
                                    <NavLink
                                        to={nav.url}
                                        style={({ isActive }) => ({
                                            color: isActive
                                                ? "#f15d30"
                                                : scrolled
                                                    ? "#000000"
                                                    : "#ffffff"
                                        })}
                                        className="nav-link"
                                    >
                                        {nav.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
