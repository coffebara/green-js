// const body = document.querySelector("body");
const btn_login = document.getElementById("l");
const main = document.querySelector("#con1");
// main.style.background = "white"
console.log(main);


    console.log("맞는데..");
    // 컨테이너
    const container = document.createElement("div");
    container.classList.add("container");
    
    const popupWrap = document.createElement("div");
    popupWrap.classList.add("pop-wrap");
    popupWrap.id = 'popup';
    container.appendChild(popupWrap);

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popupWrap.appendChild(popup);

    const popupHead = document.createElement("div");
    popupHead.classList.add("popup-head");
    popup.appendChild(popupHead);

    const headTitle = document.createElement("span");
    headTitle.classList.add("pop-head");
    headTitle.innerText = "LOG IN"; 
    popupHead.appendChild(headTitle);

    const popupBody = document.createElement("div");
    popupBody.classList.add("popup-body");
    popup.appendChild(popupBody);

    const bodyContent = document.createElement("div");
    bodyContent.classList.add("body-content");
    popupBody.appendChild(bodyContent);

    const bodyTitleBox = document.createElement("div");
    bodyTitleBox.classList.add("body-titleBox");
    bodyContent.appendChild(bodyTitleBox);

    const bodyTop = document.createElement("div");
    bodyTop.classList.add("body_top");
    bodyTitleBox.appendChild(bodyTop);

    const textControl1 = document.createElement("div");
    textControl1.classList.add("text_control");
    bodyTop.appendChild(textControl1);

    const userName = document.createElement("p");
    userName.innerText = "Username";
    textControl1.appendChild(userName);

    const formGroup1 = document.createElement("div");
    formGroup1.classList.add("form_group");
    bodyTop.appendChild(formGroup1);

    const formControl1 = document.createElement("input");
    formControl1.type = "text";
    formGroup1.appendChild(formControl1);

    const bodyBottom = document.createElement("div");
    bodyBottom.classList.add("body_bottom");
    bodyTitleBox.appendChild(bodyBottom);

    const textControl2 = document.createElement("div");
    textControl2.classList.add("text_control");
    bodyBottom.appendChild(textControl2);

    const password = document.createElement("p");
    password.innerText = "Password"
    textControl2.appendChild(password);

    const formGroup2 = document.createElement("div");
    formGroup2.classList.add("form_group");
    bodyBottom.appendChild(formGroup2);

    const formControl2 = document.createElement("input");
    formControl2.type = "password";
    formGroup2.appendChild(formControl2);

    const popupFoot = document.createElement("div");
    popupFoot.classList.add("popup-foot");
    popup.appendChild(popupFoot);

    const btnSignUp = document.createElement("div");
    btnSignUp.classList.add("btn_signUp");
    btnSignUp.innerText = "sign up";
    popupFoot.appendChild(btnSignUp);

    const btnControl = document.createElement("button");
    btnControl.classList.add("btn_control");
    btnControl.classList.add("btn1");
    btnControl.id = "close";
    btnControl.innerText = "LOGIN"
    popupFoot.appendChild(btnControl);

    main.appendChild(container)
