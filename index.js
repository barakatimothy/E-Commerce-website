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

function closePayment() {
    var paymentDiv = document.querySelector('.payment');
    paymentDiv.style.display = 'none';
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


const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

// Read the data from db.json
function readData() {
  const data = fs.readFileSync('db.json');
  return JSON.parse(data);
}

// Write the data to db.json
function writeData(data) {
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
}

// API endpoint to retrieve the data
app.get('/api/data', (req, res) => {
  const data = readData();
  res.json(data);
});

// API endpoint to update the data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  const data = readData();
  data.push(newData);
  writeData(data);
  res.json({ message: 'Data added successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('API server is running on port 3000');
});


fetch('http://localhost:3000/api/data')
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  const newData = { /* Your data object */ };

fetch('http://localhost:3000/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newData)
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Success message
  })
  .catch(error => {
    console.error('Error:', error);
});
