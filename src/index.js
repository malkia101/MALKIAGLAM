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

            // Display success message
            const messageContainer = document.getElementById("cart-message");
            messageContainer.textContent = `${productName} added to cart!`;
            messageContainer.style.display = "block"; // Show the message

            // hide the message after 3 seconds
            setTimeout(() => {
                messageContainer.style.display = "none";
            }, 3000); //  3  seconds
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

        // validation
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

        // Display success message
        const messageContainer = document.getElementById("appointment-message");
        messageContainer.textContent = "Appointment booked successfully!";
        messageContainer.style.display = "block"; 

        // hide the message after 3 seconds
        setTimeout(() => {
            messageContainer.style.display = "none";
        }, 3000); // Hide after 3 seconds

        bookingForm.reset();
    });
});


// // scripts.js (linked to
// document.addEventListener("DOMContentLoaded", function () {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

//     // Display cart items
//     if (cart.length > 0) {
//         const cartContainer = document.createElement("div");
//         cartContainer.innerHTML = "<h2>Your Cart</h2>";
//         cart.forEach((item) => {
//             cartContainer.innerHTML += `<p>${item.name} - ${item.price}</p>`;
//         });
//         document.querySelector("main").appendChild(cartContainer);
//     }

//     // Display appointments
//     if (appointments.length > 0) {
//         const appointmentsContainer = document.createElement("div");
//         appointmentsContainer.innerHTML = "<h2>Your Appointments</h2>";
//         appointments.forEach((appointment) => {
//             appointmentsContainer.innerHTML += `
//                 <p>Service: ${appointment.service}</p>
//                 <p>Name: ${appointment.name}</p>
//                 <p>Date: ${appointment.date}</p>
//                 <p>Time: ${appointment.time}</p>
//                 <hr>
//             `;
//         });
//         document.querySelector("main").appendChild(appointmentsContainer);
//     }
// });