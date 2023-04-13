
let tens = 00;
let seconds = 00;
let intervals;
const getSeconds = document.getElementById('seconds')
const getTens = document.getElementById('tens')
const start = document.getElementById('start_btn')
const stop = document.getElementById('stop_btn')
const reset = document.getElementById('reset_btn')


start.addEventListener('click', () => {
   intervals = setInterval(startTimer, 10)
})

stop.addEventListener('click',() =>{
    clearInterval(intervals)
})

reset.addEventListener('click', () =>{
    clearInterval(intervals);
    tens = '00';
    seconds = '00';
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
})

const startTimer = () => {
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }if (tens > 9){
        getTens.innerHTML = tens;
    }if (tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }if (seconds > 9){
        getSeconds.innerHTML = seconds;
    }
}