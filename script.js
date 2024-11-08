document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
    const displayImage = document.getElementById("display-image");

    // Set default image based on the first accordion item
    displayImage.setAttribute("src", accordionItems[0].getAttribute("data-image"));

    accordionItems.forEach((item, index) => {
        const title = item.querySelector(".accordion-title");
        const content = item.querySelector(".accordion-content");

        // Set default open state for the first item
        if (index === 0) {
            title.classList.add("active");
            content.style.display = "block";
        }

        title.addEventListener("click", function() {
            // Close all other accordion items
            accordionItems.forEach(i => {
                i.querySelector(".accordion-title").classList.remove("active");
                i.querySelector(".accordion-content").style.display = "none";
            });

            // Open current accordion item
            title.classList.add("active");
            content.style.display = "block";

            // Change image based on data attribute
            const imgSrc = item.getAttribute("data-image");
            displayImage.setAttribute("src", imgSrc);
        });
    });
});
