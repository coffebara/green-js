const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");

const adress = document.querySelector("#desc p:nth-child(2)");
const phone = document.querySelector("#desc p:nth-child(3)");


// querySelectorAll() 메서드는 주어진 셀렉터에 해당하는 모든 요소를
// NodeList 객체로 반환합니다 여러개이기 때문에 반복문으로 사용합니다



title.onclick = () => {
    title.classList.toggle("clicked");
}
userName.onclick = () => {
    userName.classList.toggle("blue-italic");
}
adress.onclick = () => {
    adress.classList.toggle("blue-italic");
}
phone.onclick = () => {
    phone.classList.toggle("blue-italic");
}