document.addEventListener("DOMContentLoaded", () => {

    const products = document.querySelectorAll(".product-card");
    const itemsNumber = document.querySelector(".items-number");

    
    itemsNumber.innerText = products.length + " items";

    
    const plusBtns = document.querySelectorAll(".button");

    plusBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            console.log(`Product ${index + 1} added`);
        });
    });
});
