
const check = document.querySelector('#check');
const guests = document.querySelector('#guests');
const quality = document.querySelector('#quality');
const tipAmaunt = document.querySelector('#tip-amaunt');


calculate = () =>{
const tip = ((check.value*quality.value) / (guests.value)).toFixed(2);
check.value = "";
guests.value = "";
quality.value = "";
if(tip === "NaN"){
    console.log("введите данные");
}else{
    console.log("с каждого по " + tip + "рублей")
}
};
