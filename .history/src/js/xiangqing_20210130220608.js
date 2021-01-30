// 鼠标移上小图事件
let lilist = $("#smallimg img")
let bigimg = $(".bigimg")
let maskNode = $(".mask")
let glassNode = $(".glass")
let glassimg = $(".glass img")
lilist.mouseenter(function(){
// lilist.each((index,node)=>{
    // console.log(index)
    // console.log(node)
    console.log(this)
    bigimg.css("src","this.src")
    glassimg.src = this.src
// bigimg.css("src","$(this)")
// })
})
// console.log(lilist)
