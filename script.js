// Функии

// let num = 20;

// function showFirstMessage(text) {
//   alert(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage("hshjdgfkjh");
// console.log(num);



// let calc = function(a,b) {
//   return (a + b);
// }

// let calc = (a,b) => a+b

// console.log(calc(3, 4));
// console.log(calc(8, 4));

// function retVar() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));





'use strict';









// цикл While

// let i = 0;
// while (i < 2) {
// 	i++
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
// 		a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {
// i--
// 	}
// };

// цикл do while

// let i = 0
// do {
// 	i++
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
// 		a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {
// i--
// 	}
// } while(i < 2);



let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
// "" - это пустая строка
start();


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};
console.log(appData.expenses)
console.log(appData.optionalExpenses)




function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
			a != '' && b != '' && a.length < 50) {

			appData.expenses[a] = b;
		} else {
			i = i -1;

		}
	};
}

function detectDayBudget() {
	chooseExpenses();
	appData.moneyPerDay = (appData.budget / 30).toFixed();

	alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget()



function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка")
	}
}

detectLevel();



function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);	
	}
}

checkSavings();

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		let a = prompt("Статья необязательных расходов", ''),
			b = prompt("Во сколько обойдется?", '');
		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
			a != '' && b != '' && a.length < 50) {

			appData.optionalExpenses[a] = b;
		} else {
			i = i - 1;

		}
	}
}
chooseOptExpenses();


// callback функции
// function first() {
// 	// Что-то делаем
// 	setTimeout( function() {
// 	console.log(1);		
// 	}, 500 );
// }

// function second() {
// 	console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
// 	console.log("Я учу " + lang);
// 	callback();
// }

// function done() {
// 	console.log("Я прошел 3й урок")
// }

// learnJS("JavaScript", done);