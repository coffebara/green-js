const title = document.getElementById("title");
const pic = document.getElementsByTagName("img");
const users = document.getElementsByClassName("user");

title.addEventListener("click", function (){
    title.innerText = (title.innerText == "My Profile") ?  "나의 프로필" : "My Profile"
})

users[0].addEventListener("click", function() {
    this.innerHTML = (this.innerHTML == "이름:도레미") ? "이름:<b>민들레</b>" : "이름:도레미"
})

pic[0].addEventListener("click", function(){
    pic[0].src = (this.src == "file:///C:/image/girl.png") ? "c:\image\\boy.png" : "c:\image\\girl.png"
})
