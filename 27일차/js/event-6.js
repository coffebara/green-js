const box = document.getElementById("box");

box.addEventListener("click", (e) => {
    alert(`client 발생 위치 : ${e.clientX}, ${e.clientY}`)
    alert(`이벤트 발생 위치 : ${e.screenX}, ${e.screenY}`)
})


// 이벤트 객체 e의 pageX와 pageY 속성을 사용하여 얻을 수 있습니다.