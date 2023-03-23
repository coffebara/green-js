// 책 목록에 추가
const title = document.querySelector("#title"); //'제목' 정보
const author = document.querySelector("#author");   // '저자' 정보
const save = document.querySelector("#save");   // '저장하기' 버튼
const bookList = document.querySelector("#bookList"); // 정보가 표시될 영역

save.addEventListener("click", (e) => {
    e.preventDefault();
    // save는 버튼 요소이며, 클릭 이벤트가 발생할 때 실행되는 콜백 함수가 정의
    //e.preventDefault();를 사용하면 이러한 기본 동작을 취소하여,
    // 클릭 이벤트가 발생했을 때 사용자 정의 동작만 실행되도록 할 수 있습니다.

    const item = document.createElement("li");
    item.innerHTML = `
        ${title.value} - ${author.value}
        <span class="delButton">삭제</span>
    `;
    bookList.appendChild(item);

    title.value = "";
    author.value = "";

    // 목록에서 제거하기
    const delButtons = document.querySelectorAll(".delButton"); // '삭제' 버튼 모두 가져오기

    for (let delButton of delButtons) {
        delButton.addEventListener("click", removeItem);
    }   
});
function removeItem() {
    let list = this.parentNode;
    list.parentNode.removeChild(list);
}   