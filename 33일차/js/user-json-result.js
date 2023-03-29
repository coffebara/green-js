// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => console.log(users));
// fetch()함수를 사용하여, JSONPlaceholder에서 사용자 정보를 가져옵니다
// 이전 단계에서 가져온 HTTP 응답 객체(response)에서 JSON 데이터를 추출하고,
// 해당 데이터를 반환합니다. 
// 이후에 호출되는 다음 .then() 메서드에서 이 JSON 데이터를 사용할 수 있게 됩니다. 
// 이전 단계에서 반환된 JSON 데이터를 users변수에 할당하고, 콘솔에 출력합니다

// await 키워드를 사용한 코드
async function init() { //fetch() 함수를 사용하여 JSONPlaceholder의 사용자 정보를 가져오고
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json(); //response.json()을 호출하여 JSON데이터를
    // JavaScript 객체로 변환합니다
    display(users);
}
// await는 프로미스 체이닝을 좀 더 쉽게 작성 async 함수에서만 사용할 수 있다. 
// async라는 예약어를 함께 사용하면 그 함수 안에 있는 명령을 비동기적으로 실행할 수 있다. 
// 프로미스 체이닝은 프로미스를 계속 연결해서 사용하기 떄문에 콜백 지옥처럼 소스가 복잡해질
// 수도 있다 -> 이런 문제를 줄이기 위해 async 함수와 await 예약어 등장
function display(users) {
    const result = document.querySelector("#result");
    let string = '';
    users.forEach((user) => {
        // string += `<ul><li>${user.name}</li><li>${user.username}</li><li>${user.email}</li></ul>`;
        string += `<table><tr><th>이름</th><td>${user.name}</td></tr>
                    <tr><th>아이디</th><td>${user.username}</td></tr>
                    <tr><th>이메일</th><td>${user.email}</td></tr>
                    </table>`;
    });
    result.innerHTML = string;
}
init();//JSONPlaceholder에서 사용자 정보를 가져오고, 화면에 출력합니다.

// await는 ECMAScript 2017부터 추가된 키워드로, Promise를 사용하는
// 비동기 함수(async function) 내에서 사용되며, 해당 Promise가 처리될 떄까지
// 함수의 실행을 일시 정지합니다. 
// 이후 Promise가 처리되면, 해당 결과를 반환하고 함수의 실행을 다시 시작합니다. 
// await 키워드를 하숑하면, 비동기 처리의 결과를 동기적인 코드처럼 다룰 수 있기 떄문에,
// 코드의 가독성을 높이고 개발자가 비동기 코드를 보다 쉽게 작성할 수 있도록 도와줍니다. 

// async function foo() {
//     const result = await someAsyncFunction();
//     console.log(result);
// }
// foo()함수 내에서 await 키워드를 사용하여 someAsyncFunction() 함수가 처리될 때까지
// 함수의 실행을 일시 정지합니다. 이후 someAsyncFunction() 함수가 처리되면,
// 해당 결과를 result 변수에 할당하고, 이를 콘솔에 출력합니다. 
// await 키워드는 반드시 비동기 함수 내에서만 사용할 수 있으며, 
// 일반적인 함수 내에서 사용할 수 없습니다. 
// 따라서, await 키워드를 사용하기 위해서는 먼저 함수를 async 함수로 정의해야 합니다.