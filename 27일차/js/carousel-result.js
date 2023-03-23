const container = document.querySelector("#container"); //캐러셀 영역
const pics = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png',
                '6.png', '7.png', '8.png', '9.png', '10.png', '11.png',
                '12.png', '13.png', '14.png']; // 이미지 배열

container.style.backgroundImage = `url(img/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left") {    // 왼쪽 화살표 클릭
            i--; // 이전 이미지로 이동
            if (i < 0) {  // 첫번째 이미지?
                i = pics.length -1; // 맨 마지막 이미지로 이동
            }
        }
        else if (e.target.id === "right") { //오른쪽 화살표 클릭?
            i++; // 다음 이미지로 이동
            if (i >= pics.length) { //마지막 이미지?
                i = 0; // 첫번째 이미지로 이동
            }
        }
        container.style.backgroundImage = `url(img/${pics[i]})`;
    })
})

// arrows.forEach( arrow => {
//     arrow.addEventListener("click", (e) => {
//         if(e.target.id === "left"){
//             i = i === 0? pics.length-1 : i-1;
//             // 2 이전 이미지 표시
//         }
//         else if(e.target.id === "right") {
//             i = (i + 1) % pics.length;
//             // 3 다음 이미지 표시
//         }
//         container.style.backgroundImage = `url(img/${pics[i]})`;
//     });
// });