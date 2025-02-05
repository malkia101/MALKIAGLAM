// scripts.js (linked to index.html)
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".product-card button");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            const productCard = event.target.closest(".product-card");
            const productName = productCard.querySelector("h3").textContent;
            const productPrice = productCard.querySelector("p").textContent;

            // Store product in local storage
            const product = {
                name: productName,
                price: productPrice,
            };
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} added to cart!`);
        });
    });
});

// scripts.js (linked to services.html)
document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const service = document.getElementById("service").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Simple validation
        if (!name || !email || !date || !time) {
            alert("Please fill out all fields.");
            return;
        }

        // Store appointment in local storage
        const appointment = {
            service,
            name,
            email,
            date,
            time,
        };
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Appointment booked successfully!");
        bookingForm.reset();
    });
});