document.addEventListener("DOMContentLoaded", function () {
    // Get all modals and buttons
    var modals = document.querySelectorAll(".modal");
    var openBtns = document.querySelectorAll(".button"); // Cambiado para seleccionar todos los botones con la clase "button"
    var closeBtns = document.querySelectorAll(".close");

    // Loop through each button to attach event listeners
    openBtns.forEach(function (openBtn, index) {
        // Attach click event to open the corresponding modal
        openBtn.onclick = function () {
            modals[index].style.display = "block";
        };
    });

    // Loop through each button to attach event listeners
    closeBtns.forEach(function (closeBtn, index) {
        // Attach click event to close the corresponding modal
        closeBtn.onclick = function () {
            modals[index].style.display = "none";
        };
    });

    // Close the modal if clicked outside the content
    window.onclick = function (event) {
        modals.forEach(function (modal, index) {
            if (event.target === modal) {
                modals[index].style.display = "none";
            }
        });
    };
});