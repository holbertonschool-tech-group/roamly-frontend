import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';
import { navs } from './navs';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to='/' className="brand">
                    <div className="title" style={{ color: scrolled && '#000000' }}>
                        Pacific
                    </div>
                    <p>
                        Travel Agency
                    </p>
                </Link>
                <nav>
                    {navs.map(nav => (
                        <NavLink
                            className='nav'
                            to={nav.url}
                            key={nav.title}
                            style={({ isActive }) => ({
                                color: isActive ? '#f15d30' : scrolled ? '#000000' : '#ffffff',
                            })}
                        >
                            {nav.title}
                        </NavLink>
                    ))}
                </nav>
                <button className="menu" onClick={handleNavCollapse}>menu</button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="ftco-nav">
                    <ul className="navbarMenu">
                        {navs.map(nav => (
                            <li className="nav-item active" key={nav}>
                                <a href={nav.url} className="nav-link">{nav.title}</a>
                            </li>
                        ))}


                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
