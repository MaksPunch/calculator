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

	let number1 = Number(document.querySelector('#number1').value);


	let loganswer = document.querySelector('.loganswer');
	loganswer.classList.remove('hidden');
	if (document.querySelector("#base1").value == "e") {
		loganswer = Math.log(number1);
	} else {
		loganswer = Math.log(number1) / Math.log(base1);
	}

	document.querySelector(".loganswer").innerHTML = Math.round(loganswer * 100) / 100 ;

}
