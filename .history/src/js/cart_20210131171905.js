//购物车 
//点击加减号功能
let addlist=document.querySelectorAll(".add")
let sublist=document.querySelectorAll(".sub")
let countlist=document.querySelectorAll(".count")
for(let i=0;i<addlist.length;i++){
    //加号功能
    count[i].innerHTML = parseInt(this.parentNode.parentNode.querySelectorAll(".count")[0].innerHTML) + 1;
    subtotal[i].innerHTML = subprice[i].innerHTML * count[i].innerHTML
}