import $ from 'jquery';

const Hamburger = () => {
    let isOpen;
    $(document).on("click", "#nav-icon", function () {
        $(this).toggleClass("open");
        isOpen = !isOpen;
        if (isOpen) {
            $(".nav").css({ display: "block", paddingTop: "15px" });
            $("#nav-icon").css({ paddingBottom: "20px" });
            $(".nav li").css({ display: "block", textAlign: "center" });
        } else {
            $(".nav").css({ padding: "15px 30px" });
            $("#nav-icon").css({ paddingBottom: "0" });
            $(".nav li").css({ display: "none" });
        }
    });
}
export default Hamburger;