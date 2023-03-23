
// const result = document.getElementById("subtext");
// const cap = document.getElementsByName("cap")[0];
// const shoes = document.getElementsByName("shoes")[0];
// const bag = document.getElementsByName("bag")[0];

// function calc(item){
//     const is_capChecked = cap.checked;
//     const is_shoesChecked = shoes.checked;
//     const is_bagChecked = bag.checked;
//     let capPrice = 0;
//     let shoesPrice = 0;
//     let bagPrice = 0;
//     if(is_capChecked == true){
//         capPrice = parseInt(cap.value);
//     }
//     if(is_shoesChecked == true){
//         shoesPrice = parseInt(shoes.value);
//     }
//     if(is_bagChecked == true){
//         bagPrice = parseInt(bag.value);
//     }
    
//     result.value = (capPrice + shoesPrice + bagPrice);
// }

// const result = document.getElementById("subtext");
// let total = 0;
// function calc(e){
//     if(e.checked){
//         total += parseInt(e.value) ;
//     } else {
//         total -= parseInt(e.value);
//     }
//     result.value = total;
// }

const result = document.getElementById("subtext");
let total = 0;
function calc(e){
    e.checked ? total += parseInt(e.value) : total -= parseInt(e.value); 
    result.value = total;
}