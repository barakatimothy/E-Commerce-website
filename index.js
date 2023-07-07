// Get the necessary elements
const buyButtons = document.querySelectorAll('.buyButton');
const productButton = document.querySelector('.productButton');
const paymentButton = document.querySelector('.payButton');
const closeButton = document.querySelector('.close');
const product = document.querySelector('.product');
const payment = document.querySelector('.payment');

// Add event listeners
buyButtons.forEach(button => {
  button.addEventListener('click', showPayment);
});

productButton.addEventListener('click', showPayment);
closeButton.addEventListener('click', closePayment);

// Show the payment section
function showPayment() {
  product.style.display = 'none';
  payment.style.display = 'block';
}

// Close the payment section
function closePayment() {
  product.style.display = 'block';
  payment.style.display = 'none';
}


currentProductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src =choosenProduct.colors[index].img
    })
})
currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "white";
        size.style.color = "black";
    });
});
productButton.addEventListener('click',()=> {
    payment.style.display = 'flex'
})
close.addEventListener('click',()=> {
    payment.style.display = 'none '
})