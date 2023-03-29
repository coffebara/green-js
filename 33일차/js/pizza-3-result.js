const pizza = () => {//pizza() 함수는 Promise를 반환합니다
    return new Promise((resolve, reject) => {//Promise는 성공할 경우
        resolve('피자를 주문합니다.');//문자열 '피자를 주문합니다.'를 반환
    });
};

const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('피자 도우 준비');
        }, 3000);
    });
};

const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('토핑 완료');
        }, 1000);
    });
};

// message는 step1 step2 step3 함수에서 인자(parameter)로 사용 
const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('굽기 완료');
        }, 2000);
    });
};

pizza()
    .then((result) => step1(result))    // pizza()가 성공하면 step1() 실행
    .then((result) => step2(result))    // step1()이 성공하면 step2() 실행
    .then((result) => step3(result))    // step2()이 성공하면 step3() 실행
    .then((result) => console.log(result)) // step3() 성공하면 "굽기완료" 표시
    .then((result)=> {
        console.log("피자가 준비되었습니다 🎉");
    });

// 위의 소비 코드를 아래와 같이 축약해서 표현할 수 있습니다. 
// pizza()
//  .then(step1)
//  .then(step2)
//  .then(step3)
//  .then(() => console.log("피자가 준비되었습니다 🎉"));
