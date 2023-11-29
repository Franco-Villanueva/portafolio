document.addEventListener("DOMContentLoaded", function () {

    var modals = document.querySelectorAll(".modal");
    var openBtns = document.querySelectorAll(".button");
    var closeBtns = document.querySelectorAll(".close");


    openBtns.forEach(function (openBtn, index) {

        openBtn.onclick = function () {
            modals[index].style.display = "block";
        };
    });


    closeBtns.forEach(function (closeBtn, index) {

        closeBtn.onclick = function () {
            modals[index].style.display = "none";
        };
    });

    window.onclick = function (event) {
        modals.forEach(function (modal, index) {
            if (event.target === modal) {
                modals[index].style.display = "none";
            }
        });
    };
});