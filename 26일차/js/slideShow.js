const slides = document.querySelector(".slides"); // 전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll(".slides li");    // 모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector(".prev"); // 이전 버튼
const next = document.querySelector(".next"); // 다음 버튼
const slideWidth = 300; // 한개의 슬라이드 넓이
const slideMargin = 100; // 슬라이드간의 margin 값

// 전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + "px";
// 각 슬라이드의 너비(slideWidth)와 여백(slideMargin)을 더한 값에
// 슬라이드 총 개수(slideCount)를 곱하고,
// 결과에 'px'을 붙여 최종 너비를 픽셀단위로 설정합니다.
function moveSlide(num){
    // 슬라이드를 이동하는 기능을 수행하며, 매개변수 num을 사용해 몇번째 슬라이드로 이동할지 지정
    slides.style.left = -num * 400 + 'px';
    // 슬라이드를 이동하는 데 사용되는 css 속성인 left 값을 변경, 음수로 만들어 왼쪽으로 이동시킴
    currentIdx = num;
    // 현재 슬라이드 인덱스(currentIdx)를 매개변수 num 값으로 변경합니다. 즉 업데이트 된거죠
}
prev.addEventListener("click", function(){
    // 첫 번째 슬라이드로 표시됐을 떄는
    // 이전 버튼을 눌러도 반응 없게 하기 위해
    // currentIdx !==0 일때만 moveSlide 함수 부르기
    console.log(currentIdx);
    if(currentIdx !== 0){
        moveSlide(currentIdx-1);
    }
});
next.addEventListener("click", function(){
    // 마지막 슬라이드로 표시됐을 때는
    // 다음 버튼을 눌러도 반응 없게 하기 위해
    // currentIdx !== slideCount-1 일 때만
    // moveSlide 함수 불러옴
    console.log(currentIdx);
    if(currentIdx !== slideCount-1){
        moveSlide(currentIdx+1);
    }
});
