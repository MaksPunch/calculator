'use strict'

let n = 2;


function addLog() {
let logcontainer = document.getElementById('logcontainer');

let log = document.createElement('div');

log.className = "log";

log.id = "log" + n;

log.innerHTML = "+ log"+'<sub> <input value="0" class="base" id=' +'base'+ n + ' type="text"> </input> </sub>' + '<input value="0" class="number" id=' + 'number' + n +' type="text"></input>';

logcontainer.append(log);
}

function addN() {
	n++;
}

console.log(n);

function equals() {
let equals = document.querySelector(".equals");

	equals.classList.remove('hidden');

	const e = 2.71828;

	let base1 = Number(document.querySelector("#base1").value);
	let base2 = Number(document.querySelector('#base2'));
	let base3 = Number(document.querySelector('#base3'));
	let base4 = Number(document.querySelector('#base4'));
	let base5 = Number(document.querySelector('#base5'));
	let base6 = Number(document.querySelector('#base6'));
	let base7 = Number(document.querySelector('#base7'));
	let base8 = Number(document.querySelector('#base8'));
	let base9 = Number(document.querySelector('#base9'));
	let base10 = Number(document.querySelector('#base10'));
	let base11 = Number(document.querySelector('#base11'));
	let base12 = Number(document.querySelector('#base12'));
	let base13 = Number(document.querySelector('#base13'));

	let number1 = Number(document.querySelector('#number1').value);
	let number2 = Number(document.querySelector('#number2'));
	let number3 = Number(document.querySelector('#number3'));
	let number4 = Number(document.querySelector('#number4'));
	let number5 = Number(document.querySelector('#number5'));
	let number6 = Number(document.querySelector('#number6'));
	let number7 = Number(document.querySelector('#number7'));
	let number8 = Number(document.querySelector('#number8'));
	let number9 = Number(document.querySelector('#number9'));
	let number10 = Number(document.querySelector('#number10'));
	let number11 = Number(document.querySelector('#number11'));
	let number12 = Number(document.querySelector('#number12'));
	let number13 = Number(document.querySelector('#number13'));

	let loganswer = document.querySelector('.loganswer');
	loganswer.classList.remove('hidden');
	if (document.querySelector("#base1").value == "e") {
		loganswer = Math.log(number1);
	} else {
		loganswer = Math.log(number1) / Math.log(base1);
	}

	document.querySelector(".loganswer").innerHTML = Math.round(loganswer * 100) / 100 ;

}