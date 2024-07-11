let endDate = " 0 "
const inputs = document.querySelectorAll(".col input");
document.getElementById("endDate").innerText = ' ';

let intervalId;
const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff<0) return;
    
    inputs[0].value = Math.floor(diff/60/60/24);
    inputs[1].value = Math.floor((diff/3600) % 24);
    inputs[2].value = Math.floor((diff/60) % 60);
    inputs[3].value = Math.floor((diff) % 60);
}

const setTimer = () => {
    const EndDate = document.getElementById("userEndDate").value;
    if(EndDate){
        endDate = new Date(EndDate).toString();
        document.getElementById("endDate").innerText = new Date(EndDate).toLocaleString();
        clock();
        intervalId = setInterval(clock, 1000);
    } else {
        alert("Please Enter a Valid Date");
    }
};

const rstTimer = () => {
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    document.getElementById("endDate").innerText = ' '; 
    clearInterval(intervalId);
}

document.getElementById("stBtn").addEventListener('click', setTimer);
document.getElementById("rstBtn").addEventListener('click', rstTimer);
clock();
