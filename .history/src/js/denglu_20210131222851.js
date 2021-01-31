$("#login").click(function () {
    let http = new XMLHttpRequest;
    http.open("get", `http://192.168.1.5:8080/login?username=${$("#username").val()}&password=${$("#password").val()}`)
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            if(http.responseText==="error"){
                alert("用户名或密码错误")
            }
            else{
                alert("登录成功")
                location.href="http://192.168.1.5/tengxun2011/src/shouye.html"
            }
        }
    }

})