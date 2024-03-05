document.addEventListener("DOMContentLoaded", function () {
    const subtitles = document.querySelectorAll("h2");

    subtitles.forEach(function (subtitle) {
        subtitle.addEventListener("click", function () {
            var content = this.nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";
        });

        subtitle.addEventListener("dblclick", function () {
            var content = this.nextElementSibling;
            content.style.display = "block";
        });
    });
});
