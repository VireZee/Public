import $ from 'jquery';
import 'animate.css';
window.jQuery = $;
require('textillate');
require('letteringjs');

const Textillate = () => {
    $("#about").textillate({
        in: {
            effect: "animate__animated animate__flash",
            delay: 7,
            shuffle: true
        }
    });
}
export default Textillate;