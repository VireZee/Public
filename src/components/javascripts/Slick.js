import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
window.jQuery = $;
require('slick-carousel');

const Slick = () => {
    $("#projects").slick({
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,
        cssEase: 'linear'
    });
}
export default Slick;