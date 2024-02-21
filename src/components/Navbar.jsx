import React from 'react';
import Nav from './javascripts/Navigation';
import Ham from './javascripts/Hamburger';
import Clo from './javascripts/Close';
import { Link } from 'react-scroll';
import '../styles/Navbar.scss';

const Navbar = () => {
    const [isMobile, setIsMobile] = React.useState();
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 800);
    };
    React.useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        Nav();
        Ham();
    }, []);
    return (
        <nav className="nav-container">
            {!isMobile && (
                <ul className="nav">
                    <li>
                        <Link
                            id="h"
                            to="home-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            id="a"
                            to="abt-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            id="e"
                            to="exp-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link
                            id="p"
                            to="pro-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            id="c"
                            to="con-container"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="slide1"></li>
                    <li className="slide2"></li>
                </ul>
            )}
            {isMobile && (
                <ul className="nav">
                    <div id="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <li>
                        <Link
                            onClick={Clo}
                            to="home-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={Clo}
                            to="abt-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={Clo}
                            to="exp-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={Clo}
                            to="pro-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={Clo}
                            to="con-container"
                            smooth={true}
                            duration={500}
                            offset={-53.5}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};
export default Navbar;