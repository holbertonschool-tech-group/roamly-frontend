import { useEffect } from "react";
import { gsap } from "gsap";

const HomePage = () => {
    useEffect(() => {
        gsap.from(".homepage-header", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
        gsap.from(".homepage-button", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            delay: 0.5,
            ease: "power3.out",
        });
    }, []);

    return (
        <div className="homepage">
            <h1 className="homepage-header">Welcome to Roamly</h1>
            <button className="homepage-button">Get Started</button>
        </div>
    );
};

export default HomePage;
