const container = document.querySelector("#container");
const h = document.querySelector("h1")

let isExist = false;

h.addEventListener("click", ()=> {
    if(!isExist){
        let newImg = document.createElement("img");
        newImg.src = "images/girl.png"
        newImg.classList.add("imgExist")
        container.appendChild(newImg)
    } else {
        const imgExist = container.querySelector(".imgExist")
        if(imgExist) {
            container.removeChild(imgExist);
        }
    }
    isExist = !isExist;

    }
);

