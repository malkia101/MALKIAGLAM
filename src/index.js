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

