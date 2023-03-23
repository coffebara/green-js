
var title = document.getElementById("title");

//  contains() 와 remove()를 활용
title.onclick = () => {
    if(title.classList.contains("clicked")){
        title.classList.remove("clicked");
    } else {
        title.classList.add("clicked");
    }
}

