document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("galleryPopup");
    const popupImg = document.getElementById("galleryPopupImg");
    const popupCaption = document.getElementById("galleryCaption");
    const closeBtn = document.querySelector(".gallery-close");

    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = img.src;
            popupCaption.innerText = img.alt;
        });
    });

    closeBtn.onclick = () => {
        popup.style.display = "none";
    };

    popup.onclick = (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    };
});
