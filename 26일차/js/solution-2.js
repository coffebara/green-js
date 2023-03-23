const result = document.getElementById("result");
const btn = document.getElementById("calc");

btn.addEventListener("click", function(){
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    result.innerHTML = GCD(num1, num2);
})



let GCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i <= Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}