var tag = document.getElementsByTagName("p");
var name1 = tag[0];

tag[0].onclick = () => {
    tag[0].style.color = "red";
}

document.write(name1);