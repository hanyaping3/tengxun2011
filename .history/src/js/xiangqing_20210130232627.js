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
    //   let xishu = {
    //       x: point.x / bigimg[0].offsetWidth,
    //       y: point.y / bigimg[0].offsetHeight,
    //   }
      if (!(point.x < maskNode[0].offsetWidth / 2 || point.x >= bigimg[0].offsetWidth - maskNode.offsetWidth / 2)) {
        //遮罩层的位置
        maskNode[0].style.left = point.x - maskNode[0].offsetWidth / 2 + "px"
 
        //放大镜的位置
        // glassimg.style.left = - glassimg.offsetWidth  * xishu.x + glassNode.offsetHeight / 2 + "px";
        glassimg[0].style.left = -parseFloat(maskNode[0].style.left) * n + "px"
   
    }
    if (!(point.y < maskNode[0].offsetHeight / 2 || point.y >= bigimg[0].offsetHeight - maskNode[0].offsetHeight / 2)) {
        // 遮罩层的位置
        maskNode[0].style.top = point.y - maskNode[0].offsetHeight / 2 + "px"

        //放大镜的位置
        // glassimg.style.top = - glassimg.offsetHeight * xishu.y + glassNode.offsetHeight / 2  + "px"
        glassimg[0].style.top = -parseFloat(maskNode[0].style.top) * n + "px"
    }
})
//点击加减号功能
let subbtn=$(".sub")
let count=$(".count")
let addbtn=$(".add")
subbtn.click(function(){
count.html()
})

