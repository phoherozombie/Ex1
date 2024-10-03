function calculateItemPrice(item) {
    const price = item.discount ? item.price - item.discount : item.price;
    const quantity = item.quantity || 1; 
    return price * quantity;
}

function calculateOrderTotal(cartItems) {
    return cartItems.reduce((total, item) => total + calculateItemPrice(item), 0);
}

const cartItems = [
    { name: "Item 1", price: 10, quantity: 2 },
    { name: "Item 2", price: 15, discount: 5 },
    { name: "Item 3", price: 5 }
];

console.log(calculateOrderTotal(cartItems));
