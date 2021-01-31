//向后端发送数据
$.ajax({
    url: "http://10.35.161.136:8080/getstudent",

    // url: "http://192.168.1.8:8080/getstudent",
    success(data) {
        data.forEach(item => {

            let newitem = $("#template").clone(true).attr("id", "")
            newitem.appendTo("#studentlist")
            newitem.find(".data-id").html(item.id)
            newitem.find(".data-name").html(item.name)
            newitem.find(".data-sex").html(item.sex?"男":"女")
            newitem.find(".data-age").html(item.age)
            newitem.find(".data-city").html(item.city)
            newitem.find(".data-joindate").html(item.joindate)

        })
    }
}
)