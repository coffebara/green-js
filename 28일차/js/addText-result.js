const orderInfo = document.querySelector("#orderInfo"); // 주문 정보 영역
const orderButton = document.querySelector("#order"); // 주문하기 버튼
const title = document.querySelector("#container > h2"); // 책 제목 요소

orderButton.addEventListener("click", ()=> {
    let newP = document.createElement("p"); // 새로운 p 요소 생성
    let textNode = document.createTextNode(title.innerText);
    // title의 텍스트 부분만 가져와 텍스트 노드로 생성
    newP.appendChild(textNode);     // 텍스트 노드를 새로운 p 요소에 추가
    newP.style.fontSize = "0.8em";
    newP.style.color = "blue";
    orderInfo.appendChild(newP);    // 새로운 p 요소를 orderInfo 영역에 추가
}, { once : true},);


// orderButton 요소에 "click" 이벤트 리스너를 추가합니다.
// 새로운 <p> 요소를 생성합니다.
// 새로운 <p> 요소의 글꼴 크기를 0.8em으로 설정하고, 글자색을 파랑색으로 설정합니다.
// { once : true} 옵션을 사용하여 이벤트 리스너가 한 번만 실행되도록 설정합니다.
// 클릭 이벤트가 처음 발생한 후에 리스너가 제거됩니다.
// 요소 노드 만들기 - createElement()   예>let newImg = document.createElement("img")
// 속성 노드 만들기 - createAttribute()
//예> document.createAttribute(속성명)
//  노드명.value = 속성값
//  속성 노드 연결하기 - setAttributeNode() 
// 새로 만든 요소 노드에 추가하려면 serAttributeNode() 메서드 사용

    // setAttribute() 다른겁니다
    // setAttribute(attributeName, attributeValue) 메서드는 속성 값을 주어진 값으로 변경합니다.
    // 예> const div = document.creatElement("div");
    //           div.setAttribute("id", "myDiv");

//자식 노드 연결하기 - appendChild()
//img 요소에 속성 노드가 연결되었지만, img 요소는 아직 DOM에 연결되지 않은 상태
//appendChilde()를 사용해서 img 요소를 원하는 위치에 연결한다.
//예> document.body.appendChild(newImg)

//기존 노드 앞에 추가하기 - insertBefore()
//insertBefore()를 사용해 첫번째 p 노드 앞에 새 노드를 추가한다.

//노드 삭제하기 - remove()      요소.remove()
//노드 삭제하기 - removeChild()    자식 노드 삭제
// 우선 부모 노드를 찾아야 하고 그 후에 자식 노드를 삭제해야 한다.
//이벤트 리스너에서 함수 안에 있는 this
// item.addEventListener("click", function() {
//     this.parentNode.removeChild(this);
// });
// 이벤트 리스너에서 function() {...}에 this를 사용하면 this는 이벤트가 발생한 노드를 가리킨다.
//예> 첫번째 항목을 클릭했다면 첫번째 li 요소가 this가 됩니다.

// 이벤트 리스너에서 화살표 함수를 사용할 경우 this는 최상위 객체 window를 가리킨다.
// 화살표 함수를 사용할 경우 클릭한 요소를 찾을 때 this를 사용할 수 없다.
// 이벤트가 발생한 요소를 this로 사용하려면 function() { } 를 사용한다.