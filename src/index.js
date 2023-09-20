import "./style.css";

const countDate = new Date("Jan 1, 2024 09:51:16").getTime();
let newDate = countDate;
const x = setInterval(function () {
  let hours = Math.floor((newDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((newDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((newDate % (1000 * 60)) / 1000);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("timer").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  newDate -= 1000;
}, 1000);

let oldPrice = "R 260.00";
let newPrice = "R 180.00";
document.getElementById("old_price").innerHTML = oldPrice;
document.getElementById("new_price").innerHTML = newPrice;

document
  .getElementById("pink")
  .addEventListener("click", (e) =>
    {document
      .getElementById("big")
      .setAttribute("src", document.getElementById("pink").getAttribute("src"))
      document.querySelectorAll(".img").forEach(el=>el.setAttribute("class", 'img'))
      document.getElementById("pink").setAttribute("class", "img disabled")
    }
  );

document
  .getElementById("black")
  .addEventListener("click", (e) =>
    {document
      .getElementById("big")
      .setAttribute("src", document.getElementById("black").getAttribute("src"));
      document.querySelectorAll(".img").forEach(el=>el.setAttribute("class", 'img'))
      document.getElementById("black").setAttribute("class", "img disabled")
  }
  );

document
  .getElementById("orange")
  .addEventListener("click", (e) =>
   { document
      .getElementById("big")
      .setAttribute(
        "src",
        document.getElementById("orange").getAttribute("src")
      )
      document.querySelectorAll(".img").forEach(el=>el.setAttribute("class", 'img'))
      document.getElementById("orange").setAttribute("class", "img disabled")
   }
  );
  
document
  .getElementById("yellow")
  .addEventListener("click", (e) =>
    {document
      .getElementById("big")
      .setAttribute(
        "src",
        document.getElementById("yellow").getAttribute("src")
      )
      document.querySelectorAll(".img").forEach(el=>el.setAttribute("class", 'img'))
      document.getElementById("yellow").setAttribute("class", "img disabled")
    }
  );
