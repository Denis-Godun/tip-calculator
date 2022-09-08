//находим все поля ввода и блок в который будем добавлять итоговую сумму
const check = document.querySelector("#check");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amaunt");

//создаём функцию появления окна с выводом
showTipAmount = () => {
  //находим это окно
  const a = document.querySelector("#tip-amaunt");
  //меняем у него класс
  a.className = "show";
  //создаём функцию setTimeout, которая убирает класс спустя 3сек после его добавления
  setTimeout(function () {
    a.className = a.className.replace("show", "");
  }, 3000);
};
//создаём функцию нахождения чаевых
calculate = () => {
  //находим чаевые используя значения введённые в инпуты
  const tip = ((check.value * quality.value) / guests.value).toFixed(2);
  //после нахождения очищаем поля ввода
  check.value = "";
  guests.value = "";
  quality.value = "";
  //создаём условную конструкцию в которой функцию появление итогового окна
  if (tip === "NaN") {
    tipAmount.textContent = "введите данные";
    showTipAmount();
  } else {
    tipAmount.textContent = "с каждого по " + tip + "BYN";
    showTipAmount();
  }
};
