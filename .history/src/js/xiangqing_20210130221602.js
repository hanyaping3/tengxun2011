// 鼠标移上小图事件
let lilist = $("#smallimg img")
let bigimg = $(".bigimg")
let maskNode = $(".mask")
let glassNode = $(".glass")
let glassimg = $(".glass img")
//鼠标移上大图、jing'tu
lilist.mouseenter(function(){
bigimg[0].src=this.src
glassimg[0].src=this.src
})

