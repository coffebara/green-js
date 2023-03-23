const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const word = document.querySelector("#word").value;
    const result = document.querySelector("#result");
    let count = word.length;

    result.innerText = `${count}`;
    
})