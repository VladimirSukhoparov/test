import"./style.css";const countDate=new Date("Jan 1, 2024 09:51:16").getTime();let newDate=countDate;const x=setInterval((function(){let e=Math.floor(newDate%864e5/36e5),t=Math.floor(newDate%36e5/6e4),n=Math.floor(newDate%6e4/1e3);e=e<10?"0"+e:e,t=t<10?"0"+t:t,n=n<10?"0"+n:n,document.getElementById("timer").innerHTML=e+":"+t+":"+n,newDate-=1e3}),1e3);let oldPrice="R 260.00",newPrice="R 180.00";document.getElementById("old_price").innerHTML=oldPrice,document.getElementById("new_price").innerHTML=newPrice,document.getElementById("pink").addEventListener("click",(e=>{document.getElementById("big").setAttribute("src",document.getElementById("pink").getAttribute("src")),document.querySelectorAll(".img").forEach((e=>e.setAttribute("class","img"))),document.getElementById("pink").setAttribute("class","img disabled")})),document.getElementById("black").addEventListener("click",(e=>{document.getElementById("big").setAttribute("src",document.getElementById("black").getAttribute("src")),document.querySelectorAll(".img").forEach((e=>e.setAttribute("class","img"))),document.getElementById("black").setAttribute("class","img disabled")})),document.getElementById("orange").addEventListener("click",(e=>{document.getElementById("big").setAttribute("src",document.getElementById("orange").getAttribute("src")),document.querySelectorAll(".img").forEach((e=>e.setAttribute("class","img"))),document.getElementById("orange").setAttribute("class","img disabled")})),document.getElementById("yellow").addEventListener("click",(e=>{document.getElementById("big").setAttribute("src",document.getElementById("yellow").getAttribute("src")),document.querySelectorAll(".img").forEach((e=>e.setAttribute("class","img"))),document.getElementById("yellow").setAttribute("class","img disabled")}));