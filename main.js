const viewsPara = document.querySelector('.pageviews')
const slider = document.querySelector('#slider')
const pricing = document.querySelector('.pricing h2')
const discount = document.querySelector('#discount');
const customSteps = ['10k','50k','100k','500K','1m']

slider.addEventListener('input',priceCalc)
discount.addEventListener('change',priceCalc)

function priceCalc(){

viewsPara.textContent = customSteps[slider.value]+' pageviews';

    let price = null;

    switch(slider.value){
        case '0': price = 8;break;
        case '1': price = 12;break;
        case '2': price = 16; break;
        case '3': price = 24;break;
        case '4': price = 36; break;
    }

    discount.checked ?  pricing.textContent = `$${price*0.75}.00`:
                        pricing.textContent = `$${price}.00`;
}