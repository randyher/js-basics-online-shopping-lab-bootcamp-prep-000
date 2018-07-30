var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem={};
  Object.assign(newItem, { itemName:item }, { itemPrice:Math.floor(Math.random() * Math.floor(100))});
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var output=`In your cart, you have`;
  if (cart.length==0){
    return `Your shopping cart is empty.`
  }
  if (cart.length==1){
    return output+ ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  for (var y=0; y<(cart.length-1); y++){
    output=output+ ` ${cart[y].itemName} at $${cart[y].itemPrice},`
  }
  output=output+` and ${cart[y].itemName} at $${cart[y].itemPrice}`
  return output+"."
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
