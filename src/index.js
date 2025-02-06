// (linked to index.html)
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
            messageContainer.style.display = "block"; 

            // hide the message after 3 seconds
            setTimeout(() => {
                messageContainer.style.display = "none";
            }, 3000); //  3  seconds
        });
    });
});


// (linked to Services.html)
document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");
    const appointmentMessage = document.getElementById("appointment-message");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // form values
        const service = document.getElementById("service").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        console.log("Form submitted successfully");

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
        appointmentMessage.innerHTML = `
            <p>Thank you, ${name} Your ${service} appointment has been booked successfully.</p>
            <p>We will send a confirmation email to ${email} for the appointment on ${date} at ${time}.</p>
        `;
        appointmentMessage.style.color = "aqua";
        bookingForm.reset(); 
    });
});
