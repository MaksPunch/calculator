function changeFigure() {
	let s = document.querySelector('#selectSize');
	let selValue = s.value;
	let Cube = document.querySelector('#Cube');
	let Prisma = document.querySelector('#Prisma');
	let Parallelepiped = document.getElementById('Parallelepiped');
		switch (selValue){
		case 'Cube':
			Cube.classList.remove('hidden');
			Prisma.classList.add('hidden');
			Parallelepiped.classList.add('hidden');
			break;

		case 'Prisma':
			Prisma.classList.remove('hidden');
			Cube.classList.add('hidden');
			Parallelepiped.classList.add('hidden');
			break;
		case 'Parallelepiped':
			Parallelepiped.classList.remove('hidden');
			Prisma.classList.add('hidden');
			Cube.classList.add('hidden');
	}	
}

function changeEdges() {
	let selEdge = document.querySelector('#selectEdges').value;
	let threeAngPrism = document.querySelector('#threeAngPrism');
	let fourAngPrism = document.querySelector('#fourAngPrism');
	let sixAngPrism = document.querySelector('#sixAngPrism');
	let threeAng = document.querySelector('#threeAng');
	let fourAng = document.querySelector('#fourAng');
	let sixAng = document.querySelector('#sixAng');
	let prismButton = document.querySelector('#equalsButton');
	let prismVolume = document.querySelector('#PrismVolume')

	if (selEdge == "3") {
		threeAngPrism.classList.remove('hidden');
		threeAng.classList.remove('hidden')
		fourAngPrism.classList.add('hidden');
		sixAngPrism.classList.add('hidden');
		fourAng.classList.add('hidden');
		sixAng.classList.add('hidden');
		prismButton.classList.remove('hidden');
		prismVolume.classList.add('hidden');
	}
	else if (selEdge == "4") {
		fourAngPrism.classList.remove('hidden');
		fourAng.classList.remove('hidden')
		threeAngPrism.classList.add('hidden');
		sixAngPrism.classList.add('hidden');
		threeAng.classList.add('hidden');
		sixAng.classList.add('hidden');
		prismButton.classList.remove('hidden');
		prismVolume.classList.add('hidden');
	} else if (selEdge == "6") {
		sixAngPrism.classList.remove('hidden');
		sixAng.classList.remove('hidden')
		fourAngPrism.classList.add('hidden');
		threeAngPrism.classList.add('hidden');
		fourAng.classList.add('hidden');
		threeAng.classList.add('hidden');
		prismButton.classList.remove('hidden');
		prismVolume.classList.add('hidden');
	} else {

	}
}

function calculateCube() {
	let CubeEgdes = document.querySelector('#CubeEgdes');
	let a = Number(CubeEdges.value);

	let S = 6*(a**2);
	let V = a**3;
	let D = a*(Math.sqrt(3));

	document.querySelector('#CubeArea').innerHTML = "S = 6a<sup>2</sup> = 6·" + a + "<sup>2</sup> = " + S;
	document.querySelector('#CubeArea').classList.remove('hidden');

	document.querySelector('#CubeVolume').innerHTML = "V = a<sup>3</sup> = " + a + "<sup>3</sup> = " + V;
	document.querySelector('#CubeVolume').classList.remove('hidden');

	document.querySelector('#CubeDiag').innerHTML = "d = a√3 = " + a + "√3 = " + Math.round(D * 100) / 100;
	document.querySelector('#CubeDiag').classList.remove('hidden');
}

function calculatePrism() {
	let PrismArea = document.querySelector('#PrismArea');
	let PrismHeightThree = document.querySelector('#PrismHeightThree');
	let PrismHeightFour = document.querySelector('#PrismHeightFour');
	let PrismHeightSix = document.querySelector('#PrismHeightSix');
	let h3 = Number(PrismHeightThree.value);
	let h4 = Number(PrismHeightFour.value);
	let h6 = Number(PrismHeightSix.value);
	let selEdge = document.querySelector('#selectEdges').value;
	let So;
	let Sb;
	let S;
	let V;

	if (selEdge == "3") {
		let a = Number(document.querySelector('#PrismThreeEdge').value);
		So = ((a**2)*Math.sqrt(3))/4;
		Sb = 3*a*h3;
		So = Math.round(So*100)/100;
		Sb = Math.round(Sb*100)/100;
		S = 2*So + Sb;

		S = Math.round(S*100)/100;

		document.querySelector('#PrismSoThree').innerHTML = '<div class="floatContainer">' + 'S<sub>o</sub> = ' + '<div class="drob"><p class="float">a<sup>2</sup>·√3</p>' + '<p class="floatposition">4</p></div>' + '= ' + (a**2)/4 + "·√3 = " + So + '</div>';
		document.querySelector('#PrismSbThree').innerHTML = 'S<sub>бок</sub> = 3ah = 3·' + a + "·" + h3 + ' = ' + Sb;
		document.querySelector('#PrismSThree').innerHTML = 'S<sub>полн</sub> = S<sub>бок</sub> + 2S<sub>o</sub> = ' + Sb + '+' + "2·" + So + " = " + S;
		V = So*h3;

		V = Math.round(V*100)/100;

		document.querySelector('#PrismVolume').classList.remove('hidden');
		document.querySelector('#PrismVolume').innerHTML = "V = S<sub>o</sub>·h = " + So + "·" + h3 + " = " + V;
	} else if (selEdge == "4"){
		let a = document.querySelector('#PrismFourEdge').value
		So = a**2;
		Sb = 4*a*h4;
		So = Math.round(So*100)/100;
		Sb = Math.round(Sb*100)/100;
		S = 2*So + Sb

		S = Math.round(S*100)/100;

		V = So*h4;

		V = Math.round(V*100)/100;
		document.querySelector('#PrismVolume').classList.remove('hidden');
		document.querySelector('#PrismVolume').innerHTML = "V = S<sub>o</sub>·h = " + So + "·" + h4 + " = " + V;
		document.querySelector('#PrismSoFour').innerHTML = 'S<sub>o</sub> = a<sup>2</sup> = ' + a + '<sup>2</sup> = ' + So;
		document.querySelector('#PrismSbFour').innerHTML = 'S<sub>бок</sub> = 4ah = 4·' + a + "·" + h4 + " = " + Sb;
		document.querySelector('#PrismSFour').innerHTML = 'S<sub>полн</sub> = S<sub>бок</sub> + 2S<sub>o</sub> = ' + Sb + '+' + "2·" + So + " = " + S;


	} else if (selEdge == "6") {
		let a = document.querySelector('#PrismSixEdge').value
		So = (3*Math.sqrt(3)*a**2)/2;
		Sb = 6*a*h6;
		S = 2*So + Sb;

		So = Math.round(So*100)/100;
		Sb = Math.round(Sb*100)/100;
		S = Math.round(S*100)/100;

		document.querySelector('#PrismSoSix').innerHTML = '<div class="floatContainer">' + 'S<sub>o</sub> = ' + '<div class="drob"><p class="float">3√3·a<sup>2</sup></p>' + '<p class="floatposition">2</p></div>' + '= ' + ((a**2)/2)*3 + "·√3 = " + So + '</div>';
		document.querySelector('#PrismSbSix').innerHTML = 'S<sub>бок</sub> = 6ah = 6·' + a + "·" + h6 + " = " + Sb;
		document.querySelector('#PrismSSix').innerHTML = 'S<sub>полн</sub> = S<sub>бок</sub> + 2S<sub>o</sub> = ' + Sb + '+' + "2·" + So + " = " + S;
		
		V = So*h6;

		V = Math.round(V*100)/100;
		document.querySelector('#PrismVolume').classList.remove('hidden');
		document.querySelector('#PrismVolume').innerHTML = "V = S<sub>o</sub>·h = " + So + "·" + h6 + " = " + V;
	}

}

function calculateParallelepiped() {
	let a = Number(document.querySelector('#ParEdgeA').value);
	let b = Number(document.querySelector('#ParEdgeA').value);
	let c = Number(document.querySelector('#ParEdgeA').value);

	let So = a*b;
	let ab = a+b;
	let Sb = 2*c*ab;
	let S = 2*So+Sb;
	let V = a*b*c;
	let d = Math.sqrt(a**2+b**2+c**2);

	So = Math.round(So*100)/100;
	Sb = Math.round(Sb*100)/100;
	S = Math.round(S*100)/100;
	V = Math.round(V*100)/100;
	d = Math.round(d*100)/100;

	document.querySelector('#SbPar').classList.remove('hidden');
	document.querySelector('#SoPar').classList.remove('hidden');
	document.querySelector('#SPar').classList.remove('hidden');
	document.querySelector('#Vpar').classList.remove('hidden');
	document.querySelector('#dPar').classList.remove('hidden');

	document.querySelector('#SPar').innerHTML = 'S<sub>полн</sub> = S<sub>бок</sub> + 2S<sub>o</sub> = ' + Sb + '+' + "2·" + So + " = " + S;
	document.querySelector('#SbPar').innerHTML = 'S<sub>бок</sub> = P<sub>осн</sub>·h = 2·(' + a + "+" + b + ")·" + c + " = " + Sb;
	document.querySelector('#SoPar').innerHTML = 'S<sub>осн</sub> = a·b = ' + a + "·" + b + ' = ' + So;
	document.querySelector('#Vpar').innerHTML = 'V = a·b·c = ' + a + '·' + b + '·' + c + ' = ' + V;
	document.querySelector('#dPar').innerHTML = 'd = √(a<sup>2</sup>+b<sup>2</sup>+c<sup>2</sup>) = √(' + a + "<sup>2</sup>+" + b + "<sup>2</sup>+" + c + '<sup>2</sup>) = ' + d;

}
