function* train () {
    yield   "판교";
    yield   "이매";
    yield   "삼동";
    yield   "경기광주";
    yield   "초월";
    yield   "곤지암";
    yield   "신둔도예촌";
    yield   "이천";
    yield   "부발";
    yield   "세종대왕릉";
    yield   "여주";
}
// 제네레이터 함수를 호출하여 gyeonggang 이터레이터 객체를 생성하고,
// 버튼 클릭 이벤트가 발생할 때마다 gyeonggang 이터레이터 객체에서 다음 값을 추출
let gyeonggang = train();   // 경강선

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
    let current = gyeonggang.next();//다음 값을 추출한다
    if(current.done !== true) {
        result.innerHTML = current.value;
    }
    else {
        result.innerHTML = "종점!";
        button.setAttribute("disabled", "disabled");
    }
});

// 자바스크립트에서 기본적으로 제공하는 시스템 내장 심볼(Symbol)을 사용할 수 있습니다
// 제네레이터 함수에서 Symbol.iterator를 사용할 경우,
// 자바스크립트에서 기본으로 제공하는 내장 심볼을 사용할 수 있습니다. 
// Symbol.iterator는 이터러블 객체를 생성할 때 사용되느 내장 심볼로,
// 제네레이터 함수를 이용하여 이터레이터 객체를 생성하는 경우에는
// Symbol.iterator를 구현할 필요가 있습니다
// yield 키워드를 사용하여 값을 반환하면 이터레이터 객체가 생성됩니다