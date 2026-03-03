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
            img: "images/kurkure1.jpg"
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
            img: "images/rice.jpg"
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
        {
            name: "Shampoo",
            desc: "Smooth & shiny hair",
            price: 99,
            img: "images/shampoo.jpg"
        }
    ]
};

const list = document.getElementById("product-list");



const products = ProductsData[category] || [];

products.forEach(item => {
    const div = document.createElement("div");
    div.className = "product-row";

    div.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <div class="product-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="product-actions">
            <span class="price">₹${item.price}</span>
            <button class="cart-btn">Add to Cart</button>
        </div>
    </div>
    `;

    list.appendChild(div);
});