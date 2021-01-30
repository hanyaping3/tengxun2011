// 鼠标移上小图事件
let lilist = $("#smallimg img")
let bigimg = $(".bigimg")
let maskNode = $(".mask")
let glassNode = $(".glass")
let glassimg = $(".glass img")
// console.log(lilist)
// console.log(bigimg)
// console.log(maskNode)
// console.log(glassNode)
// console.log(glassimg)

lilist.mouseenter(function(){
bigimg[0].src=this.src
glassimg[0]
// lilist.each((index,node)=>{
//     console.log(index)
//     console.log(node)
//     console.log(this)
//     bigimg.css("src","this.src")
//     glassimg.src = this.src
// bigimg.css("src","$(this)")
// })
})
// console.log(lilist)
