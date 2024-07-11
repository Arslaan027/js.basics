let page = document.querySelector("body");
// let btn = document.querySelector("#btn")

page.addEventListener('click', CLR);

function CLR () {
    const colorRandom = Math.floor(Math.random() * 16777215);

    const color = "#"+ colorRandom.toString(16);
    page.style.backgroundColor = color;
}

setInterval(()=>{
    CLR();
}, 100);

CLR();