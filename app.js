const button1 = document.querySelector("#button1");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const pg1button1 = document.querySelector("#pg1button1");
const pg1button2 = document.querySelector("#pg1button2");
const pg1bt = document.querySelector(".pg1bt");
const page3 = document.querySelector(".page3");
const pg2button1 = document.querySelector("#pg2button1");
const pg2button2 = document.querySelector("#pg2button2");
const pg2bt = document.querySelector(".pg2bt");
const page4 = document.querySelector(".page4");
const pg3button1 = document.querySelector("#pg3button1");
const pg3button2 = document.querySelector("#pg3button2");
const pg3bt = document.querySelector(".pg3bt");

page2.style.display = 'none'
page3.style.display = 'none'
page4.style.display = 'none'

let mark = 0;

function sucess2() {
    mark += 1;
    page2.style.display = 'none'
    page3.style.display = 'block'
    pg2button2.addEventListener("click",fail3);
    pg2button1.addEventListener("click",sucess3);
}
function fail2() {
    page2.style.display = 'none'
    page3.style.display = 'block'
    pg2button2.addEventListener("click",fail3);
    pg2button1.addEventListener("click",sucess3); 
}

function sucess3() {
    mark += 1;
    page3.style.display = 'none'
    page4.style.display = 'block'
    pg3button2.addEventListener("click",fail4);
    pg3button1.addEventListener("click",sucess4);
}
function fail3() {
    page3.style.display = 'none'
    page4.style.display = 'block'
    pg3button2.addEventListener("click",fail4);
    pg3button1.addEventListener("click",sucess4); 
}



function changefirst() {
    page1.style.display = 'none'
    page2.style.display = 'block'
    pg1button2.addEventListener("click",sucess2);
    pg1button1.addEventListener("click",fail2);
}

button1.addEventListener("click",changefirst)


