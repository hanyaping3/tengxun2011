let express = require("express")();
let mysql = require("mysql");
const port = 8080;

// Node解决跨域问题
express.all("/*", function (req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})
//规划mysql链接
var sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "tengxun",
    timezone: "08:00"
});
//尝试连接
sql.connect();
//1.获得登录页请求
express.get("/login", (request, response) => {
    //获得前端请求
    let username = request.query.username;
    let password = request.query.password;
    //在数据库查找所需要数据
    sql.query(`SELECT * FROM usertable WHERE username="${username}" AND password="${password}"`, (error, data) => {
        if (error) {
            console.log(error)
            response.send("error")
        }
        else {
            if (!data.length) {
                response.send("error")
            }
            else {
                response.send("success")
            }
        }
    })

})
//2.获得注册页请求
express.get("/adduser", (request, response) => {
    //获得前端请求
    let username = request.query.username;
    let password = request.query.password;
    let nicheng = request.query.nicheng;
    //在数据库查找所需要数据
    sql.query(`INSERT INTO usertable(username,password) VALUES ("${username}","${password}")`, (error, data) => {
        if (error) {
            console.log(error)
            response.send("error")
        }
        else {
            response.send("success")
        }
    })

})
//3.获得后台页请求，得到学生信息
express.get("/getstudent", (request, response) => {
    sql.query(`SELECT * FROM students ORDER BY id`, (error, data) => {
        if (error) {
            console.log(error)
            response.send("error")
        }
        else {
            response.send(data)
        }
    })

})
//4.删除学生信息
express.get("/deinfo", (request, response) => {
    let id = request.query.id
    sql.query(`DELETE FROM students WHERE id="${id}"`, (error, data) => {
        if (error) {
            console.log(error)
            response.send("error")
        }
        else {
            response.send("success")
        }
    })
})
//5.增加 学生信息
express.get("/addinfo", (request, response) => {
    let name = request.query.name
    let sex = request.query.sex
    let age = request.query.age
    let city = request.query.city
    let joindate = request.query.joindate
    if (name && age && sex && city && joindate) {
        sql.query(`INSERT INTO students (name,sex,age,city,joindate) VALUES ("${name}","${sex}","${age}","${city}","${joindate}")`, (error, data) => {
            if (error) {
                console.log(error)
                response.send("error")
            }
            else {
                response.send("success")
            }
        })}
        else{response.end("error")}
})
//6.编辑功能
express.get("/upinfo", (request, response) => {
    let id = request.query.id
    let name = request.query.name
    let sex = request.query.sex
    let age = request.query.age
    let city = request.query.city
    let joindate = request.query.joindate
    if (name && age && sex && city && joindate) {
        sql.query(`UPDATE students SET name="${name}",sex="${sex}",age="${age}",city="${city}",joindate="${joindate}" WHERE id="${id}"`, (error, data) => {
            if (error) {
                console.log(error)
                response.send("error")
            }
            else {
                response.send("success")
            }
        })}
        else{response.end("error")}
})


express.listen(port)
console.log("server is running at " + port)