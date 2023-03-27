let xhr = new XMLHttpRequest();
xhr.open('GET', 'student.json', true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let student = JSON.parse(xhr.responseText);
        document.getElementById("result").innerHTML = `
        <h1>${student.name}</h1>
        <ul>
            <li>전공 : ${student.major}</li>
            <li>학년 : ${student.grade}</li>
        </ul>
        `;
    }
};

// JSON 파일을 불러올 때 왜 라이브 서버로 실행해야 하는 이유는 보안 문제 때문입니다. 
// 웹 브라우저는 보안상의 이유로 로컬 파일 시스템에서
// 직접적으로 외부 JSON 파일을 로드하는 것을 제한합니다.
// 따라서, 웹 브라우저에서 로컬 파일 시스템에 접근할 때는
// 보안상의 이유로 제한이 걸려서 AJAX 요청 등으로 외부 JSON 파일을 불러올 수 없습니다. 
// 라이브 서버로 실행하면 웹 브라우저가 로컬 파일 시스템에 접근하는 것이 아니라, 
// 웹 서버에 요청을 보내서 JSON 파일을 받아올 수 있기 떄문에 보안 문제를 우회할 수 있습니다
