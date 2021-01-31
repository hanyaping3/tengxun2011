$("#login").click(function () {
    let http = new XMLHttpRequest;
    http.open("get", `http://192.168.1.5:8080/adduser?username=${$("#username").val()}&password=${$("#password").val()}&nicheng=${$("#nicheng").val()}`)
    
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            if(http.responseText==="success"){
                alert("注册成功，去登陆")
                location.href="http://192.168.1.5/work/work27/login.html"
            }
            else{
                alert("注册失败")
            }
        }
    }

})