//购物车 
//点击加减号功能
let subbtn=$(".sub")
let count=$(".count")
let addbtn=$(".add")

subbtn.click(function(){
    let a=$(this).closest(".").find(".count").html()
    $(".count").html(a-1)
})
addbtn.click(function(){
    let a=$(this).closest(".shuliang").find(".count").html()
    $(".count").html(Number(a)+1)
})