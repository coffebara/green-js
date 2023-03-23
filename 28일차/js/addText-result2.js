const orderInfo = document.querySelector("#orderInfo"); // 주문 정보 영역
const orderButton = document.querySelector("#order"); // 주문하기 버튼
const title = document.querySelector("#container > h2"); // 책 제목 요소


// 하다 안됨.
orderButton.addEventListener("click", ()=> {
    let newP = document.createElement("p"); 
    let textNode = document.createTextNode(title.innerText);
    newP.appendChild(textNode);    
    newP.style.fontSize = "0.8em";
    newP.style.color = "blue"; 

    if(orderInfo.hasChildNodes()){
        // console.log("hasChildNodes")
        orderInfo.removeChild(orderInfo.firstChild);
        // document.querySelector("body").style.backgroundColor="black"
    } else {
        orderInfo.appendChild(newP); 
        // console.log("appendChild")
    }
});

