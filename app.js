const plus = document.getElementById('plus')
let counterPlus = 0;

function increment(){
    counterPlus = ++1;
    plus.innerHTML = counterPlus
};

const sub = document.getElementById('sub')
let counterSub = 0;

function decrement(){
    counterSub = --1;
    sub.innerHTML = counterSub
};
decrement()