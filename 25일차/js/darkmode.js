// document.getElementsByTagName 로 사용하기
// const button = document.getElementsByTagName("button");

// button[0].onclick = () => {
//     document.body.classList.toggle("dark")
// }

// document.querySelector 를 사용하기
const btn = document.querySelector("#toggle-box button");
btn.addEventListener("click",function(){
    document.body.classList.toggle("dark");
})

