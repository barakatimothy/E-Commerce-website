
let choosenProduct = products[0]
const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice= document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAl('.size')
const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll('.menuItem')


menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
          //change current slide
        wrapper.style.transform =`translateX(${-100 *index}vw)`
          //cahnge choosen product
        choosenProduct = products[index]
         //
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent  = choosenProduct.price
       
        currentProductImg.src =choosenProduct.colors[0].img
        //asign new color
        currentProduct.forEach((color,index)=>{
            color.style.backgroudColor  = choosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src =choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index) =>{
    size.addEventListener('click',()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroudColor = "white";
            size.style.color = "black"
        })
        size.style.backgroudColor = "white";
        size.style.color = "black"
    })
})
const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close= document.querySelector('.close')

productButton.addEventListener('click',()=> {
    payment.style.display = 'flex'
})
close.addEventListener('click',()=> {
    payment.style.display = 'none '
})