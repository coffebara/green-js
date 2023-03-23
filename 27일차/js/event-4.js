

function changeBackground() {
    document.body.style.backgroundColor ="green";
}
const btn = document.querySelector("button");
btn.onclick = changeBackground;


// --------------------------------------------------------

// const btn = document.querySelector("button");

// btn.onclick = function() {
//     document.body.style.backgroundColor ="green";
// }

//-------------------------------------------------------------

// function changeBackground() {
//     document.body.style.backgroundColor ="green";
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", changeBackground);

//-----------------------------------------------------------
// 익명함수 사용
// const btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     document.body.style.backgroundColor ="green";
// });

// --------------------------------------------------------------

// 화살표함수 사용
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     document.body.style.backgroundColor ="green";
// });