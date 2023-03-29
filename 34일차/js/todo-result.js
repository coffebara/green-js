const todoInput = document.querySelector('#todo-input');  //사용자 입력
const addButton = document.querySelector('#add-button');  //추가 버튼
const todoList = document.querySelector('#todo-list');  //투두 리스트

//사용자 입력을 받는 요소를 찾아서 변수에 저장합니다
//이벤트 처리
document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', manageTodo);

//추가 버튼을 찾아서 변수에 저장합니다.
//함수

function addTodo(e) {    //addTodo 함수 정의 시작과 기본동작을 취소합니다.
    e.preventDefault(); //기본 동작 취소

    //입력 값을 가져와 새로운 소스로 추가
    //테스트 코드
    //<div class="todo">
    //<li class="todo-content">내용</li>
    //<button class="complete-button">완료</button>
    //<button class="delete-button">삭제</button>
    //</div>

    const newDiv = document.createElement('div');   //div 요소를 생성
    newDiv.classList.add('todo');   //todo 클래스를 추가
    const newTodo = document.createElement('li');
    //생성한 li 요소에 todo-content 클래스를 추가
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);    //새로운 내용 추가

    saveToLocal(todoInput.value);   //로컬 스토리지에 저장
    //'button'요소를 생성하고 , '완료' 텍스트를 설정한 뒤 'complete-button' 클래스를 추가
    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton); //div 요소에 생성한 완료 버튼을 자식 요소로 추가


    const deleteButton = document.createElement('button');  //button 요소를 생성
    deleteButton.innerText = '삭제';  //삭제 텍스트를 설정
    deleteButton.classList.add('delete-button');    //delete-button 클래스를 추가
    newDiv.appendChild(deleteButton); //div 요소에 생성한 삭제 버튼을 자식 요소로 추가

    todoList.appendChild(newDiv);   //ul요소의 자식 요소로 추가

    todoInput.value = ""; //입력 창 초기화
}

//saveToLocal 함수를 정의하는 부분의 시작 사용자가 입력한 값을 로컬 스토리지에 저장하는 역할
function saveToLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        //저장된 항목이 없으면 빈배열을 생성한다
        todos = [];
    } else {    //로컬 스토리지에 저장된 To-Do 항목을 가져오거나
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    //사용자가 입력한 todo 항목을 추가합니다
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}   //변경된 배열을 로컬 스토리지에 다시 저장
    //로컬 스토리지에서 저장도니 To-Do 항목을 가져와 화면에 표시하는 역할을 합니다
function getLocal() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) { //todos 요소마다 반복
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');   //저장된 각 TO-DO 항목을 가져와 새로운 요소를 생성
        const newTodo = document.createElement('li');
        newTodo.innerText = todo; //로컬 스토리지의 값 표시
        newTodo.classList.add('todo-content');
        newDiv.appendChild(newTodo);

        const completeButton = document.createElement('button');  //완료버튼을 만들어 줍니다
        completeButton.innerText = '완료';
        completeButton.classList.add('complete-button');
        newDiv.appendChild(completeButton);

        const deleteButton = document.createElement('button');  //삭제버튼을 만들어 줍니다
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton);
        //todo리스트에 추가해줍니다
        todoList.appendChild(newDiv);   //ul요소의 자식 요소로 추가

        todoInput.value = "";   //입력 창 초기화
    });
}

function manageTodo(e) { //To-Do 리스트에서 발생한 이벤트를 처리하는 역할을 합니다
    const whichButton = e.target.classList[0];    //클릭한 부분의 class명 가져오기
    if (whichButton === 'complete-button') {    //클릭한 부분이 완료버튼이면
        const todo = e.target.parentElement;
        todo.children[0].classList.toggle('completed');
        //내용 부분에 .completed 클래스 토글
    } else if (whichButton === 'delete-button') {    //클릭한 부분이 삭제버튼이면
        const todo = e.target.parentElement;
        removeLocal(todo);  //todo항목 제거
        todo.remove();
    }
}   //To-Do 항목을 로컬 스토리지에서 제거하는 역할을 합니다
function removeLocal(todo) {
    let todos;  //로컬 스토리지에서 가져온 할 일들
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const index = todos.indexOf(todo.children[0].innerText); //삭제할 할 일의 인덱스
    todos.splice(index, 1);  //index번째 해당 인덱스 요소 삭제
    localStorage.setItem('todos', JSON.stringify(todos));   //변경된 todos 저장
}   //변경된 배열을 로컬 스토리지에 다시 저장합니다