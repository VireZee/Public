import React from 'react';
import Thr from './javascripts/Three';
import Text from './javascripts/Textillate';
import { useInView } from 'react-intersection-observer';
import '../styles/About.scss';

const About = () => {
    const canvasRef = React.useRef();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: .1
    });
    React.useEffect(() => {
        if (inView) {
            const threeElement = document.querySelector(".three");
            threeElement.style.animationPlayState = "running";
            const canvas = canvasRef.current;
            const threeInstance = Thr(canvas);
            const handleResize = () => {
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                threeInstance.onWindowResize();
            };
            handleResize();
            window.addEventListener("resize", handleResize);
            Text();
        }
    }, [inView]);
    return (
        <div className="abt-container" ref={ref}>
            <div className="three">
                <canvas ref={canvasRef}></canvas>
            </div>
            <h1 id="about">
                This website has been developed using the ReactJS framework and incorporates a range of supplementary technologies including a CSS preprocessor (SCSS) as well as several libraries such as
                Animate.css, jQuery, Lettering.js, Normalize.css, Particle.js, React Intersection Observer, React Reveal, React Scroll, Slick Carousel, Textillate.js, Three.js, and Typed.js.
            </h1>
        </div>
    )
}
export default About;