// Selecting necessary elements.
const cartContainer = document.querySelector("#cart-container");
const cartEmptyMessage = document.querySelector("#cart-empty-message");

// Adding item to cart from the localStorage
// When the page is being loaded.

// Make sure there is item in the cart.
if(localStorage.getItem('cart')) {
  // Clearing empty cart message.
  cartEmptyMessage.classList.add('hidden');

   // Extracting data from localstorage.
   let cartItems = localStorage.getItem('cart').split(',');

   // creating a div  and puttin the item name and qunatity in that div.
   cartItems.forEach((item, index) => {
      // Creating elements.
      const image = document.createElement('img');
      const name = document.createElement('p');
      const quantity = document.createElement('p');
      const price = document.createElement('p');
      const itemContainer = document.createElement('div');
      const cartButton = document.createElement('button');
      
      // Assigning values.
      name.innerText = item.split(':')[0];
      quantity.innerText = item.split(':')[1];
      price.innerText = item.split(':')[2];
      cartButton.innerText = 'Remove';
      image.src =
        "https://images.unsplash.com/photo-1633371824243-d84b605958f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTcwMjIzOA&ixlib=rb-1.2.1&q=80&w=800";
      
      // Adding proper classes and id.
      itemContainer.classList.add('cart');
      name.classList.add('item-name');
      cartButton.classList.add('cart-btn');

      // Pressing cartButton should clear this item.
      cartButton.addEventListener('click', () => {
         // Deleting from the cart.
         if(cartItems.length > 1) {
            newCart = '';
            cartItems.forEach((newItem, newIndex) => {
               // Add all the items to newCart except the current item.
               if(newIndex != index) {
                  if(newCart === '') {
                     newCart += newItem;
                  }
                  else { //if it is not the first item
                     // there should be a comma to differentiate between items.
                     newCart = newCart + ',' + newItem;
                  }
               }
            })
            localStorage.setItem('cart', newCart);
            cartItems = newCart.split(',');
         }
         else { // If it is the last item just remove the whole cart.
            localStorage.removeItem('cart');
         }
         // Deleting Visually.
         itemContainer.parentNode.removeChild(itemContainer);
      })

      // Appending everything properly.
      itemContainer.appendChild(image);
      itemContainer.appendChild(name);
      itemContainer.appendChild(quantity);
      itemContainer.appendChild(price);
      itemContainer.appendChild(cartButton);
      cartContainer.appendChild(itemContainer);
   })
}