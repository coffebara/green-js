let xhr = new XMLHttpRequest();
xhr.open('GET', 'student-2.json', true);
xhr.send();
var html = "";
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let student = JSON.parse(xhr.responseText);
        renderHTML(student);
    }
};
// renderHTML 함수에서는 파싱된 JSON 데이터를 반복문(for...of)을 이용하여 HTML 문자열로 변환합니다
function renderHTML(contents) {
    let output ="";
    for (let content of contents) {
        output += `
        <h2>${content.name}</h2>
        <ul>
            <li>전공 : ${content.major}</li>
            <li>학년 : ${content.grade}</li>
        </ul>
        <hr>
        `;
    }
    document.getElementById("result").innerHTML = output;
}

// 다음과 같이 forEach문을 사용해도 됩니다.
// function renderHTML(contents) {
//     let output = '';
//     contents.forEach(function(content)  {
//         output += `
//         <h2>${content.name}</h2>
//         <ul>
//             <li>전공 : ${content.major}</li>
//             <li>학년 : ${content.grade}</li>
//         </ul>
//         <hr>
//         `;
//     });
//     document.getElementById("result").innerHTML = output;
// }

// for문
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let student = JSON.parse(xhr.responseText);
//         for(var i = 0; i<student.length; i++){
//             html += `
//             <h1>${student[i].name}</h1>
//             <ul>
//                 <li>전공 : ${student[i].major}</li>
//                 <li>학년 : ${student[i].grade}</li>
//             </ul>
//             `;
//         }
//         document.getElementById("result").innerHTML = html
//     }
// }