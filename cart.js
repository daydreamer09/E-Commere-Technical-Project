
let quantity = document.getElementById('quantity');
let bulb = document.getElementById('bulb');
let sofa = document.getElementById('sofa');
let potPlant = document.getElementById('pot-plant');
let chair = document.getElementById('chair');
let cancelBulb = document.getElementById('remove-bulb');
let cancelChair = document.getElementById('remove-chair');
let cancelSofa = document.getElementById('remove-sofa');
let cancelPlant = document.getElementById('remove-plant');
let sofaQuantity = document.getElementById('quantity-sofa');
let plantQuantity = document.getElementById('quantity-plant');
let bulbQuantity = document.getElementById('quantity-bulb');
let chairQuantity = document.getElementById('quantity-chair');
let checkout = document.getElementById('checkout-action');
let pricePlant = document.getElementById('price-plant');
let priceChair = document.getElementById('price-chair');
let priceSofa = document.getElementById('price-sofa');
let priceBulb = document.getElementById('price-bulb');
let totalCart = document.getElementById('total-cart');

chair.style.display = 'none';
sofa.style.display = 'none';
bulb.style.display = 'none';
potPlant.style.display = 'none';
let total = 0;

for(let i = 0; i < localStorage.length; i++){
    let item = localStorage.key(i);

    if (item === 'item1'){
        potPlant.style.display = '';
    }

    if(item === 'item1Price'){
        plantQuantity.innerHTML = localStorage.getItem(item);
    };
    
    if (item === 'item2'){
        bulb.style.display = '';
    }

    if(item === 'item2Price'){
        bulbQuantity.innerHTML = localStorage.getItem(item);
    };
    
    if (item === 'item3'){
        sofa.style.display = '';
    }

    if(item === 'item3Price'){
        sofaQuantity.innerHTML = localStorage.getItem(item);
    };
    
    if (item === 'item4'){
        chair.style.display = '';
    };

    if(item === 'item4Price'){
        chairQuantity.innerHTML = localStorage.getItem(item);
    };

}

cancelPlant.onclick = () => {
    localStorage.removeItem('item1');
    localStorage.removeItem('item1Price');
    potPlant.style.display = 'none';

};

cancelSofa.onclick = () => {
    localStorage.removeItem('item3');
    localStorage.removeItem('item3Price');
    sofa.style.display = 'none';

};

cancelBulb.onclick = () => {
    localStorage.removeItem('item2');
    localStorage.removeItem('item2Price');
    bulb.style.display = 'none';

};

cancelChair.onclick = () => {
    localStorage.removeItem('item4');
    localStorage.removeItem('item4Price');
    chair.style.display = 'none';
};

const totalAmount = () => {
    total = 0; 
    let item1Total = 0, item2Total = 0, item3Total = 0, item4Total = 0;
    let item1TotalValue = Number(pricePlant.innerHTML),
    item2TotalValue = Number(priceBulb.innerHTML),
    item3TotalValue = Number(priceSofa.innerHTML),
    item4TotalValue = Number(priceChair.innerHTML);

    
    for(let i = 0; i < localStorage.length; i++){
        let item = localStorage.key(i);

        if(item === 'item1Price'){
            let x = localStorage.getItem(item);
            x = Number(x);
            item1Total = x * item1TotalValue;
            total += item1Total;
        }

        if(item === 'item2Price'){
            let x = localStorage.getItem(item);
            x = Number(x);
            item2Total = x * item2TotalValue;
            total += item2Total;
        }

        if(item === 'item3Price'){
            let x = localStorage.getItem(item);
            item3Total = x * item3TotalValue;
            total += item3Total;
        }

        if(item === 'item4Price'){
            let x = localStorage.getItem(item);
            item4Total = x * item4TotalValue;
            total += item4Total;
        }
    }  
};

checkout.onclick = () =>{
    total = 0;
    totalAmount();
    localStorage.setItem('total', total);
    totalCart.innerHTML = localStorage.getItem('total');
}