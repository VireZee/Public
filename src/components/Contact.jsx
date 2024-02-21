import React from 'react';
import 'particles.js';
import Prtcl from './javascripts/Particles';
import { useInView } from 'react-intersection-observer';
import '../styles/Contact.scss';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: .5
    });
    React.useEffect(() => {
        if (inView) {
            const particlesJS = window.particlesJS;
            particlesJS("particles-js", Prtcl);
        }
    }, [inView]);
    return (
        <div className="con-container" ref={ref}>
            <div id="particles-js"></div>
            <div className="contact">
                <h1>Get in Touch</h1>
                <p>Feel free to contact me for any inquiries or collaboration opportunities.
                    Just click on the button below, leave a message, and I'll try my best to respond back to you!
                </p>
                <button>
                    <span>
                        <a href="mailto:viermarzo@gmail.com">Hello</a>
                    </span>
                </button>
            </div>
        </div>
    )
}
export default Contact;