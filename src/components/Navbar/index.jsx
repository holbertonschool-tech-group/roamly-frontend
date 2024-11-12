// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';
import { navs } from './navs';
function Navbar() {
    return (
        <div className='Navbar '>
            <div className="container">

                <Link to='/' className="brand">
                    <div className="title">
                        Pacific
                    </div>
                    <p>
                        Travel Agency
                    </p>
                </Link>
                <nav>
                    {
                        navs.map(nav => {
                            return <NavLink
                                to={nav.url}
                                key={nav.title}
                                style={({ isActive }) => ({
                                    color: isActive ? '#f15d30' : '#ffffff',
                                })}
                            >
                                {nav.title}
                            </NavLink>
                        })
                    }

                </nav>
            </div>
        </div>
    );
}

export default Navbar;

