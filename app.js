document.addEventListener("DOMContentLoaded", function () {
    // Get the modal and buttons
    var modal = document.getElementById("myModal");
    var openBtn = document.getElementById("openModalBtn");
    var closeBtn = document.getElementById("closeModalBtn");

    // Open the modal
    openBtn.onclick = function () {
        modal.style.display = "block";
    };

    // Close the modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Close the modal if clicked outside the content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
