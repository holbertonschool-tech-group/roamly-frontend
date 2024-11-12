import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';
import { navs } from './navs';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
            </div>
        </div>
    );
}

export default Navbar;
