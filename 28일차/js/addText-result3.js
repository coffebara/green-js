let isOrdered = false; // 토글 상태를 추적하는 변수

orderButton.addEventListener("click", () => {
    if(!isOrdered) {
        let newP = document.createElement("p"); 
        let textNode = document.createTextNode(title.innerText);
        newP.appendChild(textNode);    
        newP.style.fontSize = "0.8em";
        newP.style.color = "blue"; 
        newP.classList.add("bookTitle");
        orderInfo.appendChild(newP);
    } else {
        const bookTitle = orderInfo.querySelector(".bookTitle")
        if(bookTitle) {
            orderInfo.removeChild(bookTitle);
        }
    }
    isOrdered = !isOrdered; //토글 상태 변경
})
