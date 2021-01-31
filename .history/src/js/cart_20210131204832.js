//购物车 
// $("input-check").click(function(){

// })
//点击加减号功能
let boxnode=document.querySelector(".cart-list")
let addlist=document.querySelectorAll(".add")
let sublist=document.querySelectorAll(".sub")
let countlist=document.querySelectorAll(".count")
boxnode.onclick = function (event) {
    let a = event.target;
    if (a.className === "add") {
        let b = a.parentNode.parentNode.querySelector(".count");
        let c = a.parentNode.parentNode.querySelector(".prise");
        let d = a.parentNode.parentNode.querySelector(".totoprise");
        // let totocount = document.querySelector(".totocount");
        // let totopriseall = document.querySelector(".totopriseall");
        b.innerHTML = parseInt(b.innerHTML) + 1;
        d.innerHTML = b.innerHTML * parseInt(c.innerHTML)+".00元";
        computed()
       
    }
    if (a.className === "sub") {
        let b = a.parentNode.parentNode.querySelector(".count");
        let c = a.parentNode.parentNode.querySelector(".prise");
        let d = a.parentNode.parentNode.querySelector(".totoprise");
        if (parseInt(b.innerHTML) > 0) {
            b.innerHTML = parseInt(b.innerHTML) - 1;
            d.innerHTML = b.innerHTML * parseInt(c.innerHTML)+".00元";
        }
        computed()
    }
    if (a.className === "delete") {
        a.parentNode.parentNode.remove();
        computed()
    }   
  
    
}
function computed() {
    let templist = document.querySelectorAll(".templete");
    let totoprise = document.querySelectorAll(".totoprise");
    let count = document.querySelectorAll(".count");
    let a = 0;
    let b = 0;
    for (let i = 0; i < templist.length; i++) {
        a += parseInt(count[i].innerHTML);
        b += parseInt(totoprise[i].innerHTML);
    }
    let totocount = document.querySelector(".totocount");
    let totopriseall = document.querySelector(".totopriseall");
    totocount.innerHTML = a;
    totopriseall.innerHTML = b;
}
