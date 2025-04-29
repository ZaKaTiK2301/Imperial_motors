document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const submenu = document.querySelector(".submenu");

    if (dropdown && submenu) {
        dropdown.addEventListener("mouseenter", function () {
            submenu.classList.add("active");
        });
        dropdown.addEventListener("mouseleave", function () {
            submenu.classList.remove("active");
        });
    }

    const faq = document.querySelector(".faq");
    if (faq) {
        faq.addEventListener("click", function (e) {
            const targetItem = e.target.closest(".faq__head");
            if (!targetItem) return;

            const currentText = targetItem.nextElementSibling;
            targetItem.classList.toggle("active");

            if (!targetItem.classList.contains("active")) {
                currentText.style.height = 0;
            } else {
                currentText.style.height = currentText.scrollHeight + "px";
            }
        });
    }
});