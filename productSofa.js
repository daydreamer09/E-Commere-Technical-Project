let item = document.getElementById('sofa-cart')
let plusButton = document.getElementById('plus-counter');
let minusButton = document.getElementById('minus-counter');
let number = document.getElementById('count');

const addQuantity = () => {
    let amount = number.innerHTML;
    amount = Number(amount);
    amount++;
    amount = String(amount);
    if(amount >= 5){
        amount = String(5);
    };
    number.innerHTML = amount;
};

const reduceQuantity = () => {
    let amount = number.innerHTML;
    amount = Number(amount);
    amount--;
    amount = String(amount);
    if(amount <= 1){
        amount = String(1);
    };
    number.innerHTML = amount;
};

plusButton.onclick = () =>{
    addQuantity();
};

minusButton.onclick = () =>{
    reduceQuantity();
};

item.onclick = () =>{
    localStorage.setItem("item3", "sofa");
    let number = count.innerHTML;
    switch(number){
        case '1':
        localStorage.setItem("item3Price", '1');
        break;
        case '2':
        localStorage.setItem("item3Price", '2');
        break;
        case '3':
        localStorage.setItem("item3Price", '3');
        break;
        case '4':
        localStorage.setItem("item3Price", '4');
        break;
        case '5':
        localStorage.setItem("item3Price", '5');
        break;
        default:
        break;
    }
    
}