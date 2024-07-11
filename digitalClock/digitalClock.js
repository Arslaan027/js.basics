let h = document.getElementById("hrs");
let m = document.getElementById("min");
let s = document.getElementById("sec");




function clock () {
    let currentTime = new Date();
    h.value = currentTime.getHours();
    m.value = currentTime.getMinutes();
    s.value = currentTime.getSeconds();
};
setInterval(()=>{
    clock();
}, 300);

clock();

