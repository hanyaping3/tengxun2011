// 鼠标移上小图事件
let lilist = $("#smallimg img")
let bigimg = $(".bigimg")
let maskNode = $(".mask")
let glassNode = $(".glass")
let glassimg = $(".glass img")
lilist.mouseenter(function(){
lilist.each((item)=>{
    console.log(item)
    console.log(this)
// bigimg.css("src","$(this)")
})
})
console.log(lilist)
