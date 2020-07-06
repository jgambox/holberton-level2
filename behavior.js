document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");

    console.log(thumbnailElement.className);

    thumbnailElement.addEventListener("click", function () {
        console.log("click detected");
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = ""
        } else {
            thumbnailElement.className = "small"
        }
        console.log(thumbnailElement.className);
    });
});