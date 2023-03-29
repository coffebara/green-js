const quotesURL = "http://dummyjson.com/quotes";
// 코드는 가져올 데이터의 URL을 변수에 저장합니다.
fetch(quotesURL)
// fetch() 함수를 호출하여 데이터를 가져오는 HTTP 요청을 보냅니다. 이 떄,
// quotesURL 변수에 저장된 URL 주소로 요청을 보내고, 서버에서 응답을 받습니다.
 .then(response => response.json())
//서버에서 받은 응답(response) 객체의 내용을 JSON으로 파싱하여 반환하는 Promise를 반환합니다.
 .then(data => {//JSON 데이터를 처리하는 콜백 함수를 등록
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);  //0~29 사이의 수
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    //result 요소 내에 class가 "quote"인 요소를 찾아서,
    //해당 요소의 내용을 data 객체에서 랜덤하게 선택한 명언(quote)으로 설정
    result.querySelector(".author").innerHTML = ` -${data.quotes[random].author}`;
    // result 요소 내에 class가 "author"인 요소를 찾아서,
    // 해당 요소의 내용을 data 객체에서 랜덤하게 선택한 명언의 작가(author)로 설정
 })

 .catch(error => console.log(err));

//  http://dummyjson.com/quotes     path"는 URL의 경로(path)를 의미합니다.
// URL은 프로토콜://도메인/경로의 형식을 따릅니다
// http://"는 프로토콜을 의미하며, "dummyjson.com"은 도메인을 의미한다
// quotes는 이 URL에서의 경로(path)를 나타냅니다. 
// 경로(path)는 보통 서버에서 요청된 자원의 위치를 나타내는 문자열입니다. 

// URL과 URI는 유사한 개념이지만, URL은 URI의 하위 개념입니다. 
// URI는 Uniform Resource Identifier의 약자이며,
// 인터넷에서 특정 자원을 나태내기 위한 식별자(identifier)입니다. 

// URI는 두 가지 형태로 구성됩니다. 하나는 URL(Uniform Resource Locator),
// 또 다른 하나는 URN(Uniform Resource Name)입니다. 
// URL은 특정 자원의 위치를 나타내며, URN은 특정 자원의 이름을 나태냅니다. 

// RUL은 인터넷 상의 특정 자원의 위치를 식별하기 위한 식별자이며, 
// URI의 하위 개념으로 일반적으로 프로토콜://도메인/경로의 형태를 따릅니다. 
// 예를 들어, http://www.examlple.com/indexedDB.html은 URL

// 반면, URI는 URL을 포함하여 모든 인터넷 상의 자원을 식별할 수 있는 통합 식별자입니다. 
// URI는 프로토콜://도메인/경로 외에도, 데이터베이스 쿼리 문자열,
// 이메일 주소 등의 다양한 형식으로 구성될 수 있습니다. 

// Path는 URL에서 자원의 경로를 나타내는 부분입니다. 
// Path는 URL의 일부로, URL의 도메인 부분 이후, 쿼리 문자열 전에 위치합니다. 
// 따라서, http://www.example.com/index.html에서 "index.html"은 Path에 해당합니다. 