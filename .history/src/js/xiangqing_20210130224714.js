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
//鼠标移上大图
bigimg.mouseenter(function () {
    maskNode.show()
    glassNode.show()
})
//鼠标移出大图
bigimg.mouseleave(function () {
    maskNode.hide()
    glassNode.hide()
})
// 鼠标移动事件
bigimg.mousemove(function (event) {
    point = {
        x: event.offsetX,
        y: event.offsetY
    }
      //大图与放大镜的倍数
      let n = glassimg[0].offsetWidth / bigimg[0].offsetWidth
      let xishu = {
          x: point.x / bigimg[0].offsetWidth,
          y: point.y / bigimg[0].offsetHeight,
      }
      console
})


