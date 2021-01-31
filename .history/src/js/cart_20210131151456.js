//购物车 
//点击加减号功能
let subbtn=$(".sub")
let count=$(".count")
let addbtn=$(".add")

subbtn.click(function(){
    let a=$(this).closest(".c5").find(".count").html()
    if(a<=1){
        return;
    }
    $(".count").html(a-1)
})
addbtn.click(function(){
    let a=$(this).closest(".c5").find(".count").html()
    $(".count").html(Number(a)+1)
})