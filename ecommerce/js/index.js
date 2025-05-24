// // Product form elements
// const productContainer = [];
// const productCategory = document.getElementById("category");
// const productName = document.getElementById("name");
// const productPrice = document.getElementById("price");

// // Create a new product from form input
// function createProduct() {
//     const product = {
//         pCategory: productCategory.value,
//         pName: productName.value,
//         pPrice: productPrice.value,
//         pImage: "images/paint.avif",
//     };
//     productContainer.push(product);
//     clearForm();
//     displayLocalProducts();
// }

// // Clear the product form fields
// function clearForm() {
//     productCategory.value = "";
//     productName.value = "";
//     productPrice.value = "";
// }

// // Display products added locally (not from API)
// function displayLocalProducts() {
//     let show = "";
//     for (let i = 0; i < productContainer.length; i++) {
//         const p = productContainer[i];
//         show += `
//             <div class="col-md-4">
//                 <div class="pb-3 bg-secondary-color">
//                     <img src="${p.pImage}" class="card-img-top" alt="Product">
//                     <div class="card-body">
//                         <p class="h4">${p.pName || 'No Name'}</p>
//                         <p class="card-text">${p.pPrice || 'N/A'} $</p>
//                         <a href="#" class="btn btn-primary">Add to cart</a>
//                     </div>
//                 </div>
//             </div>`;
//     }
//     document.getElementById("productList").innerHTML = show;
// }

// // Fetch and display products from the API
// async function getFromApi() {
//     const url = 'https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=281407&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '3d4cd7cc60mshd4f32ff40afe3a7p10af89jsn855d562e2794',
//             'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         // Display only if products are available
//         if (data && data.data && Array.isArray(data.data.products)) {
//             displayApiProducts(data.data.products);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Display products fetched from the API (max 20)
// function displayApiProducts(products) {
//     let show = "";
//     for (let i = 0; i < Math.min(products.length, 20); i++) {
//         const p = products[i];
//         show += `
//             <div class="col-md-4">
//                 <div class="pb-3 bg-secondary-color">
//                     <img src="${p.product_photo || 'images/paint.avif'}" class="card-img-top" alt="Product">
//                     <div class="card-body">
//                         <p class="h4">${p.product_title || 'No Name'}</p>
//                         <p class="card-text">${p.product_price || 'N/A'} $</p>
//                         <a href="#" class="btn btn-primary">Add to cart</a>
//                     </div>
//                 </div>
//             </div>`;
//     }
//     document.getElementById("productList").innerHTML = show;
// }

// // Load products from API on page load
// getFromApi();
