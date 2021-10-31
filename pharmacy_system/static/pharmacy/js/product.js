// Selecting necessary elements.
const addToCartButtons = document.querySelectorAll(
  ".btn.btn-main-2.btn-round-full.btn-icon"
);
const productName = document.querySelectorAll('.product-name');
const productPrice = document.querySelectorAll('.product-price');

// *******************
// ***** Events. *****
// *******************

// Whenever a add to cart button is clicked,
// Add it to localStorage to keep track of it.
addToCartButtons.forEach((addToCartButton, index) => {
  addToCartButton.addEventListener("click", () => {
    // If there is an item, set it to previous item + new item.
    if (localStorage.getItem("cart") !== null) {
      localStorage.setItem(
        "cart",
        // Formate for each producct is name:quantity:price
        `${localStorage.getItem("cart")},${productName[index].innerText}:1:${
          productPrice[index].innerText
        }`
      );
    } else {
      // If there are no item just set it as the first item.
      localStorage.setItem(
        "cart",
        // addToCartButton.value contains the name of the product.
        `${productName[index].innerText}:1:${productPrice[index].innerText}`
      );
    }
  });
});

