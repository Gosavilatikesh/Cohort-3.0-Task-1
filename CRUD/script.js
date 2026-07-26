const createbtn = document.querySelector("#create")
const formDiv = document.querySelector(".form")

const closebtn = document.querySelector("#close")
const form = document.querySelector("form")

const productDiv = document.querySelector(".products");

let productArr = [];

let ui = () => {

    productDiv.innerHTML = "";
    productArr.forEach((elem) => {
        productDiv.innerHTML += `<div class="product-card">
                <div class="img">
                    <img src="${elem.image}" alt="" />  
                <div class="text">
                    <h3>${elem.productName}</h3>
                    <p>${elem.description}</p>
                    <p>${elem.price}</p>
                </div>
                <div class="btns">
                    <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
                    <button id="delete">Delete</button>
                </div>
            </div>`
    })
}

createbtn.addEventListener('click', () => {
    formDiv.style.display = "flex";
})

closebtn.addEventListener('click', () => {
    formDiv.style.display = "none";
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let productName = event.target[0].value;
    let description = event.target[1].value;
    let price = event.target[2].value;
    let image = event.target[3].value;

    if(
        productName.trim() === "" || 
        description.trim() === "" || 
        price === "" || 
        image ===""){
        return;
    }

    let obj ={
        productName,
        description,
        price,
        image,
    };

    productArr.push(obj);
    ui();
    formDiv.style.display = "none";

    form.reset();

})

const updateProduct = (name) => {
    formDiv.style.display = "flex";
    let product = productArr.find((elem) => elem.productName === name);

    form[0].value = product.productName
    form[1].value = product.description
    form[2].value = product.price
    form[3].value = product.image
};