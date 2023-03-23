const container = document.querySelector("#container");
const body = document.querySelector("body")
const today = new Date(); 
const gsc = today.getSeconds(); 



body.addEventListener("click", () => {
    let newImg = document.createElement("img");
    newImg.src = (gsc%2 == 0)? "images/girl.png" : "images/boy.png"
    newImg.classList.add("imgExist");
    container.appendChild(newImg);
},{once:true});

body.addEventListener("keydown",(e) => {
    var key = e.key;
    if(key == "t" || key == "T"){
        const imgExist = container.querySelector(".imgExist")
        container.removeChild(imgExist);
    }
})








// let isExist = false;

// body.addEventListener("click", ()=> {
//     if(!isExist){
//         let newImg = document.createElement("img");
//         newImg.src = "images/girl.png"
//         newImg.classList.add("imgExist")
//         container.appendChild(newImg)
//     } else if(key == "j" || key == "J"){
//         const imgExist = container.querySelector(".imgExist")
//         if(imgExist) {
//             container.removeChild(imgExist);
//         }
//     }
//     isExist = !isExist;

//     }
// )
// .addEventListener("keydown",(event) =>{
//     var key = event.key;
// });

