function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
		if ((typeof (save)) === 'string' && (typeof (save)) != null && (typeof (percent)) != null &&
			save != '' && percent != '' && save.length < 50) {
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);	
	}
}

checkSavings();