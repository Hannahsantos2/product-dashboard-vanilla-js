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
