const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");
var result = "";
button.addEventListener("click", function(){
    let n = userNumber.value;
    try{
        if( n === "" || isNaN(n)) {
            throw "숫자를 입력하세요.";
        }
        if(n<=10) {
            result = `${n} 정답이다 연금술사!`
            document.querySelector("#result").innerHTML = result;
        }
        if (n > 10) {
            throw "10보다 작은 수를 입력하세요.";
        }
    }
    catch (err) {
    alert(err);
    } 
    finally {
        userNumber.value = "";
    }
})