const status = document.querySelector(".hero-panel h3");

status.addEventListener("click", function () {
    if (status.textContent === "SECURE") {
        status.textContent = "ACTIVE";
    } else {
        status.textContent = "SECURE";
    }
});