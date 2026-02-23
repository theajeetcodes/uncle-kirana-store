const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const pageTitle = document.getElementById("page-title");
pageTitle.innerText = category ? category.toUpperCase() : "Products";

const ProductsData = {
    snacks: [
        {
            name: "Kurkure",
            desc: "Spicy crunchy snack",
            price: 20,
            img: "image/kurkure.jpg"
        }
    ]
}