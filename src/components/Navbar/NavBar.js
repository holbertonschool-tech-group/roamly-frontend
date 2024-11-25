import { gsap } from "gsap";

const NavBar = () => {
    const handleHover = (e) => {
        gsap.to(e.target, { scale: 1.2, duration: 0.3, ease: "power1.out" });
    };

    const handleOut = (e) => {
        gsap.to(e.target, { scale: 1, duration: 0.3, ease: "power1.in" });
    };

    return (
        <nav className="navbar">
            <ul>
                <li onMouseEnter={handleHover} onMouseLeave={handleOut}>
                    Home
                </li>
                <li onMouseEnter={handleHover} onMouseLeave={handleOut}>
                    Features
                </li>
                <li onMouseEnter={handleHover} onMouseLeave={handleOut}>
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
