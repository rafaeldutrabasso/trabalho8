document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelectorAll("img");

    img.forEach(function (img) {
        img.addEventListener("mouseover", function () {
            this.style.boxShadow = "0 0 10px red"; 
        });

        img.addEventListener("mouseout", function () {
            this.style.boxShadow = "none"; 
        });
    });
});