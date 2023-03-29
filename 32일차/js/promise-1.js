let likePizza = true;   //이 값을 false로 바꿔서도 테스트해 보세요
const pizza = new Promise((resolve, reject) => {
    if (likePizza){ //likePizza 의 값에 따라
        resolve('피자를 주문합니다.');
    }
    else {
        reject('피자를 주문하지 않습니다.')
    }
});

pizza //Promise 객체의 상태에 따라 
.then(
    result => console.log(result)
)
.catch(
    err => console.log(err)
);
// 아래와 같이 작성할 수도 있음
// pizza.then(
//     result => console.log(result),
//     err => console.log(err)
// );
// 프로미스의 상태
// 프로미스는 resolve() 함수나 reject() 함수를 매개변수로 받아서
// 실행하는 객체
// 프로미스 객체는 resolve() 함수나 reject() 함수를 실행하면서 상태가 바뀜
// pending 처음 프로미스를 만들면 대기상태가 됩니다 -- 객체만들기 new
// fulfilled 처리에 성공하면 이행상태가 됩니다. --then()
// rejected 처리에 성공하지 못하면 거부상태가 됩니다 --catch()