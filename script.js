// Toggle Cart Function (example)
function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'block';  // Show the modal
}

// Close the Cart Modal
function closeCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'none';  // Hide the modal
}

// A simple array to store the cart items
let cart = [];

// Function to add products to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    
    cart.push(product);
    alert(productName + " has been added to your cart!");
    console.log(cart);  // You can display the cart content in the console for now
}

// Function to show cart contents (optional functionality)
function showCart() {
    let cartContent = "Cart Contents:\n";
    cart.forEach(item => {
        cartContent += `${item.name} - $${item.price}\n`;
    });
    alert(cartContent);
}

