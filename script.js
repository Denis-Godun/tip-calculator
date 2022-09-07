
const check = document.querySelector('#check');
const guests = document.querySelector('#guests');
const quality = document.querySelector('#quality');
const tipAmount = document.querySelector('#tip-amaunt');


calculate = () =>{
const tip = ((check.value*quality.value) / (guests.value)).toFixed(2);
check.value = "";
guests.value = "";
quality.value = "";
if(tip === "NaN"){
    tipAmount.textContent = "введите данные";
    showTipAmount();
}else{
    tipAmount.textContent = "с каждого по " + tip + "рублей";
    showTipAmount();
}
};

showTipAmount = () => {
const a = document.querySelector('#tip-amaunt');
a.className = "show";
setTimeout(function(){ a.className = a.className.replace("show", ""); }, 3000);
};