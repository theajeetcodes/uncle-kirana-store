const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const pageTitle = document.getElementById("page-title");
pageTitle.textContent = category ? category.toUpperCase() : "Products";