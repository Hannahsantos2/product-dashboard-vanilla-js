let apiUrl = "https://www.course-api.com/javascript-store-products";

// Step 3: Uses fetch(), .then(), and .catch()
function fetchProductsThen() {
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            for (let i = 0; i < products.length; i++) {
                console.log(products[i].fields.name);
            }
        })
        .catch(function(error) {
            console.log("Fetch error:", error.message);
        });
}
// Step 4: Uses async, await, try, and catch
async function fetchProductsAsync() {
    try {
        let response = await fetch(apiUrl);
        let products = await response.json();

        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}
// Step 5: Displays the first 5 products
function displayProducts(products) {
    let productContainer = document.querySelector("#product-container");

    for (let i = 0; i < 5; i++) {
        let productName = products[i].fields.name;
        let productPrice = products[i].fields.price / 100;
        let productImage = products[i].fields.image[0].url;

        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <h3>${productName}</h3>
            <p>$${productPrice.toFixed(2)}</p>
        `;

        productContainer.appendChild(productCard);
    }
}
// Step 6: Handles errors
function handleError(error) {
    console.log("An error occurred:", error.message);
}
// Step 7: Calls both fetch functions
fetchProductsThen();
fetchProductsAsync();
