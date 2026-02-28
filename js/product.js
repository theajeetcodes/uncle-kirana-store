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
        },
        {
            name: "Taka Tak",
            desc: "Crispy masala snack",
            price: 10,
            img: "images/takatak.jpg"
        },
        {
            name: "Balaji Chips",
            desc: "Classic Indian chips",
            price: 20,
            img:"images/balaji.jpg"
        }
    ],

    grocery: [
        {
            name: "Rice",
            desc: "Premium quality rice",
            price: 250,
            img: "image/rice.jpg"
        },
        {
            name: "Dal",
            desc: "Healthy protein dal",
            price: 180,
            img: "images/daal.jpg"
        }
    ],

    personal: [
        {
            name: "Soap",
            desc: "Refreshing bath soap",
            price: 14,
            img: "images/soap.jpg"
        },
    ]
}