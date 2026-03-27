document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".simple-form");

    let messageDisplay = document.createElement("p");
    messageDisplay.style.marginTop = "10px";
    form.appendChild(messageDisplay);

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (username === "" || email === "" || message === "") {
            messageDisplay.textContent = "Please fill in all fields.";
            messageDisplay.style.color = "red";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            messageDisplay.textContent = "Please enter a valid email address.";
            messageDisplay.style.color = "red";
            return;
        }

        messageDisplay.textContent = "Message sent successfully!";
        messageDisplay.style.color = "green";

        form.reset();
    });

    document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {

        const image = slider.querySelector(".project-image");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");

        const images = image.dataset.images.split(",");
        let currentIndex = 0;

        prevBtn.addEventListener("click", function () {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            image.src = images[currentIndex];
        });

        nextBtn.addEventListener("click", function () {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            image.src = images[currentIndex];
        });

    });

});


});
