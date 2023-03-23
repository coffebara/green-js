const selectMenu = document.querySelector("#major");
// 선택 목록을 가져와 selectMenu로 저장

function displaySelect(){
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(`[${selectedText}]를 선택했습니다.`);
}
    selectMenu.onchange = displaySelect;
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;

// selectMenu는 <select> 요소를 참조합니다.
// selectMenu.options는 <select> 요소의 모든 <option> 요소를 포함하는 배열입니다.
// selectMenu.selectedIndex는 사용자가 선택한 <option>의 인덱스를 반환합니다. 
// 따라서 selectMenu.options[selectMenu.selectedIndex]는 사용자가 선택한 <option>요소를 참조합니다. 
// .innerText를 사용하여 선택한 option 요소의 텍스트를 가져와서 selectedText변수에 저장합니다.

// alert(`[${selectedText}]를 선택했습니다.`);
// alert()함수를 사용하여 사용자에게 알림 창을 표시합니다.
// 알림 창의 메시지는 "선택한 옵션 텍스트를 선택했습니다."로 표시되며,
// 대괄호 안에 선택한 옵션의 텍스트가 들어갑니다.

// displaySelect() 함수를 <select> 요소의 이벤트 리스너에 연결하면,
// 사용자가 새로운 항복을 선택할 때마다 해당 함수가 호출되어 알림 창이 표시됩니다