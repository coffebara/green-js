function order(coffee, callback) {
    console.log(`${coffee} 주문 접수`);
    setTimeout(() => {
        callback(coffee);
    }, 3000);
}
function display(result) {
    console.log(`${result} 준비 완료 ☕`); // 윈도우 + .
}

order("아메리카노", display);
// 1. order("아메리카노", display) 호출:
// :"아메리카노" 커피 주문을 접수하고 display 함수를 콜백으로 전달합니다.
// 2. order() 함수가 실행됩니다. 
// 3. order() 함수 내부에서 console.log(${coffee} 주문 접수)를 실행하여
// 4. order() 함수 내부에서 setTimeout() 메서드를 사용하여
// 콜백 함수 display()를 3초 후에 실행하도록 예약합니다. 
// 5.3초 대기 후, display() 함수가 실행됩니다. 
// 6. display() 함수 내부에서 console.log(`${result} 준비 완료 ☕`)를;
// 실행하여 아메리카노 준비 완료 .☕"를 출력