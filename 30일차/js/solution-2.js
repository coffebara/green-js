const result = document.querySelector("#result");
const button = document.querySelector("button");

const luckyNumber = {
    digitCount: 6,  // 숫자 6
    maxNumber: 45   // 최대 숫자 45
};

button.addEventListener("click", () => {
    let { digitCount, maxNumber} = luckyNumber; 
    // luckyNumber.digitCount  || luckyNumber.maxNumber 로 사용 가능
    let myNumber = new Set(); // 숫자가 중복되지 않게 저장할 Set 생성
    for (let i = 0; i < digitCount; i++){
        var num = Math.floor(Math.random() * maxNumber)+1;
        if(myNumber.has(num)){
            --i;
        }
        myNumber.add(num);
    }

    // while (myNumber.size < digitCount) {
    //  let number = Math.floor(Math.random() * maxNumber) +1;
    //  myNumber.add(number);
    //}
    result.innerText = `${[...myNumber]}`;  //set을 Array로 변환
});
//myNumber Set 객체를 배열로 변환하기 위해 전개 연산자(...)를 사용
//let { digitCount, maxNumber} = luckyNumber; 는
//const luckyNumber = {
//     digitCount: 6,  // 숫자 6
//     maxNumber: 45   // 최대 숫자 45
// };
// 에서의 키 값을 