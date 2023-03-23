let x = 10;
let sum = x+y;
let y = 20;
console.log(sum);

// 자바스크립트에서는 변수를 선언 할 때 3개를 사용할 수 있다.
// var, let, const이 세가지 선언 타입을 어떨 때 사용하는지 제대로 비교해보자

// let과 const는 ES6부터 생긴 것들이다
// 그 이전 버전에서는 var를 사용했다.ES6부터

// var와 let은 크게 다르지 않다고 한다.
// 대부분의 경우에 서로 바꿔 사용해도 크게 문제가 발생하지는 않는다.ES6부터특징을 조금 더 살펴보면,

// 1. var는 한번 선언된 변수를 다시 선언할 수 있다.
// var name = 'cookie';
// console.log(name); // cookie
// var name = 'miro';
// console.log(name); // miro
// name이 두 번이나 선언됐는데 전혀 문제가 발생하지 않는다.

// 같은 상황에서 var대신 let을 사용하면 아래와 같은 에러 메세지를 출력한다. 
// (name이 이미 선언 되었다는 뜻)

// 2. var는 선언하기 전에 사용할 수 있다.
// console.log(name);  // undefinded
// var name = 'cookie';
// 띠용.. name이 선언되기 전에 먼저 콘솔로 찍었는데도 오류가 발생하지 않는다. 

// 물론 그렇다고 할당된 값이 출력되지는 않고 undefinded가 출력되기는 한다.

// 왜 이렇게 동작이 되는걸까?
// 위의 코드는 실제로 아래와 같은 코드로 동작한다.

// var name;
// console.log(name); // undefinded

// name = 'cookie';
// var로 선언한 모든 변수는 코드가 실제로 이동하는 것은 아니지만,

// 최사우이로 끌어 올려진 것처럼 동작한다.
// 이것을 호이스팅(hoisting)이라고 한다.