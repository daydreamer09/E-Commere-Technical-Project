let amando = document.getElementById('amando');
let factory = document.getElementById('the-factory');
let furniture = document.getElementById('the-furniture-inc');
let artdeco = document.getElementById('artdeco');
let addToCartPotPlant = document.getElementById('add-to-cart-pot-plant');
let addToCartBulb = document.getElementById('add-to-cart-bulb');
let addToCartSofa = document.getElementById('add-to-cart-sofa');
let addToCartChair = document.getElementById('add-to-cart-chair');

amando.onclick = () => {
    document.getElementById('sigle-item-amando').style.display = '';
    document.getElementById('sigle-item-artdeco').style.display = 'none';
    document.getElementById('sigle-item-the-factory').style.display = 'none';
    document.getElementById('sigle-item-the-furniture-inc').style.display = 'none';
};

factory.onclick = () => {
    document.getElementById('sigle-item-the-factory').style.display = '';
    document.getElementById('sigle-item-artdeco').style.display = 'none';
    document.getElementById('sigle-item-amando').style.display = 'none';
    document.getElementById('sigle-item-the-furniture-inc').style.display = 'none';
};

furniture.onclick = () => {
    document.getElementById('sigle-item-the-furniture-inc').style.display = '';
    document.getElementById('sigle-item-artdeco').style.display = 'none';
    document.getElementById('sigle-item-the-factory').style.display = 'none';
    document.getElementById('sigle-item-amando').style.display = 'none';
};

artdeco.onclick = () => {
    document.getElementById('sigle-item-artdeco').style.display = '';
    document.getElementById('sigle-item-amando').style.display = 'none';
    document.getElementById('sigle-item-the-factory').style.display = 'none';
    document.getElementById('sigle-item-the-furniture-inc').style.display = 'none';
};

addToCartPotPlant.onclick = () =>{
    localStorage.setItem("item1", "pot-plant");
    localStorage.setItem("item1Price", '1');
};

addToCartBulb.onclick = () =>{
    localStorage.setItem("item2", "bulb");
    localStorage.setItem("item2Price", '1');
};

addToCartSofa.onclick = () =>{
    localStorage.setItem("item3", "sofa");
    localStorage.setItem("item3Price", '1');
};

addToCartChair.onclick = () =>{
    localStorage.setItem("item4", "chair");
    localStorage.setItem("item4Price", '1');
};