        const nav_item = document.querySelectorAll(".nav_item");
        
        window.addEventListener("load", function() {
            nav_item.forEach(function(item) {
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
            item.addEventListener("mouseenter", function() {
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
        nav_item.forEach((list) => {
            list.addEventListener("click", function () {
                var tmp = this;
                var a = tmp.getAttribute("id");
                switch(a){
                    case "s":
                        location.href = 'story.html';
                        break;
                    case "c":
                        location.href = '#';
                        break;
                    case "m":
                        location.href = '#';
                        break;
                    case "f":
                        location.href = 'forum.html';
                        break;
                    case "l":
                        location.href = '#';
                        break;
                }


                // if(this.innerHTML == "Home"){
                //     location.href = 'index.html';
                // } else if(this.innerHTML == "Portfolio"){
                //     location.href = 'portfolio.html';
                // } else if(this.innerHTML == "About"){
                //     location.href = 'about.html';
                // }
            });
        });