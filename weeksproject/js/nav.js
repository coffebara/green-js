const aTag = document.querySelectorAll(".nav_item");
        const nav_menu = Array.from(aTag);
        
        window.addEventListener("load", function() {
            aTag.forEach(function(item) {
            item.addEventListener("mouseleave", function() {
                var tmp = this;
                var a = tmp.getAttribute("id");
                switch(a){
                    case "s":
                        tmp.innerText = "STORY";
                        break;
                    case "c":
                        tmp.innerText = "CHARACTER";
                        break;
                    case "m":
                        tmp.innerText = "MEDIA MIX";
                        break;
                    case "f":
                        tmp.innerText = "FORUM";
                        break;
                    case "l":
                        tmp.innerText = "LOGIN";
                        break;
                }
            });
            item.addEventListener("mouseover", function() {
                var tmp = this;
                var a = tmp.getAttribute("id");
                switch(a){
                    case "s":
                        tmp.innerText = "스토리";
                        break;
                    case "c":
                        tmp.innerText = "등장 인물";
                        break;
                    case "m":
                        tmp.innerText = "미디어 믹스";
                        break;
                    case "f":
                        tmp.innerText = "게시판";
                        break;
                    case "l":
                        tmp.innerText = "로그인";
                        break;
                }
            })
        })
        })