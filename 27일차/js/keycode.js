const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown",(e)=>{
    result.innerText =`
    code : ${e.code},
    key : ${e.key}
    `;
});
//document.body 를 body라는 변수에 저장합니다. 웹 페이지의 본문을 나타냅니다.
// body 요소에 "keydown" 이벤트 리스너를 추가합니다.
// keydown 이벤트가 발생하면, 익명의 화살표 함수가 실행됩니다.
// 함수 내에서 result.innerText를 변경하여, "result" 요소에 키보드 이벤트에 대한 정보를 출력합니다.