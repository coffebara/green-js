
for(var i = 1; i <= 9; i ++){
    document.write("<div>");
    document.write(`${i}단 <br>`);
    for(var y = 1; y <= 9; y++){
        document.write(`${i} X ${y} = ${i * y} <br>`)
    }
    document.write("</div>");
}