document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product-card");
    const itemsNumber = document.querySelector(".items-number");

    itemsNumber.innerText = products.length + " items";

    products.forEach(product => {
        product.addEventListener("click", () => {
            const category = product.dataset.category;
            window.location.href = `product.html?category=${category}`;
        });
    });
});