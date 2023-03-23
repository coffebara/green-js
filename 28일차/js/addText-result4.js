const orderInfo = document.querySelector("#orderInfo"); // 주문 정보 영역
const orderButton = document.querySelector("#order"); // 주문하기 버튼
const title = document.querySelector("#container > h2"); // 책 제목 요소
let isOrderInfoShown = false;
orderButton.addEventListener("click", () => {
    // orderInfo 요소에 p 요소가 이미 추가되어 있는지 확인
    const existingP = orderInfo.querySelector("p");
    if (existingP) {
        console.log("existingP가 true 존재합니다")
        existingP.remove(); // 이미 추가되어 있다면 삭제
    }

    let newP = document.createElement("p");
    let textNode = document.createTextNode(title.innerText);
    newP.appendChild(textNode);
    newP.style.fontSize = "0.8em";
    newP.style.color = "blue";
    orderInfo.appendChild(newP);

    // 주문 정보 영역의 표시 여부를 토글
    isOrderInfoShown = !isOrderInfoShown;
    orderInfo.style.display = isOrderInfoShown ? "block" : "none";
});