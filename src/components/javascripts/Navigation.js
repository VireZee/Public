import $ from 'jquery';

const Navigation = () => {
    const current = $(".nav a").position();
    const currentWidth = $(".nav a").parent("li").width();
    $(".nav .slide1").css({ left: current.left, width: currentWidth });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && window.innerWidth > 800) {
                const targetClass = entry.target.classList[0];
                const position = $(`#${targetClass.charAt(0)}`).position();
                const width = $(`#${targetClass.charAt(0)}`).parent().width();
                $(".nav .slide1").css({ opacity: 1, left: position.left, width: width });
            }
        });
    }, { threshold: .5 });
    ["home", "abt", "exp", "pro", "con"].forEach(section => observer.observe(document.querySelector(`.${section}-container`)));
    $(".nav a").on("click", function () {
        const position = $(this).position();
        const width = $(this).parent().width();
        $(".nav .slide1").css({ opacity: 1, left: + position.left, width: width });
        observer.disconnect();
        setTimeout(() => {
            ["home", "abt", "exp", "pro", "con"].forEach(section => observer.observe(document.querySelector(`.${section}-container`)));
        }, 400);
    });
    $(".nav a").on("mouseover", function () {
        const position = $(this).position();
        const width = $(this).parent().width();
        $(".nav .slide2").css({ opacity: 1, left: + position.left, width: width });
    });
    $(".nav a").on("mouseout", function () {
        $(".nav .slide2").css({ opacity: 0 });
    })
}
export default Navigation;