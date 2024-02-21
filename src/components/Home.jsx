import React from 'react';
import Ty from './javascripts/Type';
import { useInView } from 'react-intersection-observer';
import '../styles/Home.scss';

const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: .1
    });
    React.useEffect(() => {
        if (inView) {
            Ty();
        }
    }, [inView]);
    return (
        <div className="home-container" ref={ref}>
            <div className="home">
                <div className="content">
                    <h1>
                        <span id="name"></span>
                    </h1>
                    <h2>
                        <span id="introA"></span>
                        <span id="introB"></span>
                    </h2>
                    <p>
                        <span id="desc"></span>
                    </p>
                    <ul>
                        <li>
                            <a href="https://linkedin.com/in/virezee" target="_blank" rel="noopener noreferrer nofollow">
                                <img className="l" src={require("../styles/imgs/linkedin.svg").default} alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/VireZee" target="_blank" rel="noopener noreferrer nofollow">
                                <img className="g" src={require("../styles/imgs/github.svg").default} alt="GitHub" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home-img"></div>
        </div>
    )
}
export default Home;