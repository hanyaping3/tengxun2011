//购物车 
//点击加减号功能
let subbtn=$(".sub")
let count=$(".count")
let addbtn=$(".add")
for(let i=0;i<addbtn.lenngth;i++){

subbtn[0][i].click(function(){
    let a=$(this).closest(".c5").find(".count").html()
    if(a<1){
        return;
    }
    $(this).closest(".c5").find(".count").html().html(a-1)
})
addbtn[0][i].click(function(){
    let a=$(this).closest(".c5").find(".count").html()
    $(this).closest(".c5").find(".count").html().html(Number(a)+1)
})
}