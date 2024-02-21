const Loader = () => {
    const load = document.querySelector(".load-container");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    load.parentNode.removeChild(header);
    load.parentNode.removeChild(main);
    setTimeout(() => {
        load.style.opacity = "0";
        load.parentNode.appendChild(header);
        load.parentNode.appendChild(main);
        load.addEventListener("transitionend", () => {
            load.parentNode.removeChild(load);
        });
    }, 3000);
}
export default Loader;