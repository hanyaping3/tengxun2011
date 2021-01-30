// 鼠标移上小图事件
let lilist = $("#smallimg img")
let bigimg = $(".bigimg")
let maskNode = $(".mask")
let glassNode = $(".glass")
let glassimg = $(".glass img")
//鼠标移上大图、镜图变化
lilist.mouseenter(function () {
    bigimg[0].src = this.src
    glassimg[0].src = this.src
})
//鼠标移上dau
bigimg.mouseenter(function () {
    maskNode.show()
    glassNode.show()
})
bigimg.mouseleave(function () {
    maskNode.hide()
    glassNode.hide()
})
// 鼠标移动事件


