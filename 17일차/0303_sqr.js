for(let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    document.write(`${i}<br>`);
}

// 특정 조건이 됐을 때 실행하던 반복 문장을 더 이상 실행하지 않고 반복문의 맨 앞으로 되돌아감
// 반복 과정을 한차례 건너뛰게 됨.

// 값으로서의 함수
//  (1) 자바스크립트에서 함수는 문법적 구문일 뿐만 아니라 값(value)이기도 함
//  (2) 따라서 함수가 변수에 대입될 수도 있으며, 다른 함수의 인수로 전달될 수도 있음

function sqr(x) {                   // 제곱의 값을 구하는 함수 sqr를 정의의
    return x * x;
}

var sqrNum = sqr;                   // 변수 sqrNum에 함수 sqr을 대입

document.write(sqr(4) + "<br>");    // 함수 sqr을 호출

document.write(sqrNum(4));          // 변수 sqrNum을 함수처럼 호출