'use strict';

let op; //выбранный оператор
  function calcTables() {
  	let tableC = document.getElementById("tableC");
    let tableB = document.getElementById("tableB");
    let tableA = document.getElementById("table");
    let fas_equals = document.getElementById("fas_equals");
    let transResult = document.getElementById("transResult");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let det = document.getElementById("detA");

    tableC.classList.remove("hidden");
    fas_equals.classList.remove("hidden");

    tableC.style.fontSize = "16px";

    let c11;
    let c12;
    let c13;
    let c21;
    let c22;
    let c23;
    let c31;
    let c32;
    let c33;

    let d11;
    let d12;
    let d13;
    let d21;
    let d22;
    let d23;
    let d31;
    let d32;
    let d33;


    

    let a11 = Number(document.getElementById("a11").value);
    let a12 = Number(document.getElementById("a12").value);
    let a13 = Number(document.getElementById("a13").value);
    let a21 = Number(document.getElementById("a21").value);
    let a22 = Number(document.getElementById("a22").value);
    let a23 = Number(document.getElementById("a23").value);
    let a31 = Number(document.getElementById("a31").value);
    let a32 = Number(document.getElementById("a32").value);
    let a33 = Number(document.getElementById("a33").value);

    let b11 = Number(document.getElementById("b11").value);
    let b12 = Number(document.getElementById("b12").value);
    let b13 = Number(document.getElementById("b13").value);
    let b21 = Number(document.getElementById("b21").value);
    let b22 = Number(document.getElementById("b22").value);
    let b23 = Number(document.getElementById("b23").value);
    let b31 = Number(document.getElementById("b31").value);
    let b32 = Number(document.getElementById("b32").value);
    let b33 = Number(document.getElementById("b33").value);

    let X = Number(document.getElementById("X").value);
    let detA;

    switch (op) {
      case '+':
        c11 = a11 + b11;
        console.log(c11);
        c12 = a12 + b12;
        c13 = a13 + b13;
        c21 = a21 + b21;
        c22 = a22 + b22;
        c23 = a23 + b23;
        c31 = a31 + b31;
        c32 = a32 + b32;
        c33 = a33 + b33;
        tableB.style.marginTop = "25px";
        tableA.style.marginTop = "25px";
        break;
      case '-':
        c11 = a11 - b11;
        c12 = a12 - b12;
        c13 = a13 - b13;
        c21 = a21 - b21;
        c22 = a22 - b22;
        c23 = a23 - b23;
        c31 = a31 - b31;
        c32 = a32 - b32;
        c33 = a33 - b33;
        tableB.style.marginTop = "25px";
        tableA.style.marginTop = "25px";
        break;
      case '*':
        c11 = a11*b11+a12*b21+a13*b31;
        c12 = a11*b12+a12*b22+a13*b32;
        c13 = a11*b13+a12*b23+a13*b33;
        c21 = a21*b11+a22*b21+a23*b31;
        c22 = a21*b12+a22*b22+a23*b32;
        c23 = a21*b13+a22*b23+a23*b33;
        c31 = a31*b11+a32*b21+a33*b31;
        c32 = a31*b12+a32*b22+a33*b32;
        c33 = a31*b13+a32*b23+a33*b33;
        tableB.style.marginTop = "25px";
        tableA.style.marginTop = "25px";
        break;
      case '*x':
        if (Number.isInteger(a11 * X) == 1
            && Number.isInteger(a12 * X) == 1
            && Number.isInteger(a13 * X) == 1
            && Number.isInteger(a21 * X) == 1
            && Number.isInteger(a22 * X) == 1
            && Number.isInteger(a23 * X) == 1
            && Number.isInteger(a31 * X) == 1
            && Number.isInteger(a32 * X) == 1
            && Number.isInteger(a33 * X) == 1) {
        c11 = a11 * X;
        c12 = a12 * X;
        c13 = a13 * X;
        c21 = a21 * X;
        c22 = a22 * X;
        c23 = a23 * X;
        c31 = a31 * X;
        c32 = a32 * X;
        c33 = a33 * X;
        numX.classList.add('hidden');
        console.log(document.getElementById("numX"));
    } else {
        numX.classList.remove('hidden');
        document.getElementById("numX").innerHTML = X;
        c11 = a11;
        c12 = a12;
        c13 = a13;
        c21 = a21;
        c22 = a22;
        c23 = a23;
        c31 = a31;
        c32 = a32;
        c33 = a33;
    }
        tableB.style.marginTop = "25px";
        tableA.style.marginTop = "25px";
        document.getElementById("X").style.marginTop = "50px";
        break;
        case 'det':
        detA = a11*a22*a33+a31*a12*a23+a21*a32*a13-a31*a22*a13-a11*a32*a23-a21*a12*a33;
        tableC.classList.add("hidden");
        det.classList.remove('hidden');
        break;
        case 'transp':
        c11 = a11;
        c12 = a21;
        c13 = a31;
        c21 = a12;
        c22 = a22;
        c23 = a32;
        c31 = a13;
        c32 = a23;
        c33 = a33;
        transResult.classList.remove('hidden');
        tableA.style.marginTop = "25px";
        break;
        case 'inv':
        let B = a11*a22*a33+a31*a12*a23+a21*a32*a13-a31*a22*a13-a11*a32*a23-a21*a12*a33;
        d11 = a22*a33-a23*a32;
        d12 = -(a12*a33-a13*a32);
        d13 = a12*a23-a13*a22;
        d21 = -(a21*a33-a23*a31);
        d22 = a11*a33-a13*a31;
        d23 = -(a11*a23-a13*a21);
        d31 = a21*a32-a22*a31;
        d32 = -(a11*a32-a12*a31);
        d33 = a11*a22-a12*a21;

        c11 = d11*(1/B);
        c12 = d12*(1/B);
        c13 = d13*(1/B);
        c21 = d21*(1/B);
        c22 = d22*(1/B);
        c23 = d23*(1/B);
        c31 = d31*(1/B);
        c32 = d32*(1/B);
        c33 = d33*(1/B);

        inversed.classList.remove('hidden');
        tableA.style.marginTop = "25px";
        break;
      default:
        c11 = '';
        c12 = '';
        c13 = '';
        c21 = '';
        c22 = 'выберите операцию';
        c23 = '';
        c31 = '';
        c32 = '';
        c33 = '';
    }

    document.getElementById("c11").innerHTML = c11;
    document.getElementById("c12").innerHTML = c12;
    document.getElementById("c13").innerHTML = c13;
    document.getElementById("c21").innerHTML = c21;
    document.getElementById("c22").innerHTML = c22;
    document.getElementById("c23").innerHTML = c23;
    document.getElementById("c31").innerHTML = c31;
    document.getElementById("c32").innerHTML = c32;
    document.getElementById("c33").innerHTML = c33;

    document.getElementById("detA").innerHTML = detA;

  }

function onClickTimesX() {
	op='*x'

	let times = document.getElementById("fasTimes");
	let minus = document.getElementById("faminus");
	let plus = document.getElementById("faplus");
    let tableB = document.getElementById("tableB");
    let X = document.getElementById("X");
    let det = document.getElementById("detA");
    let determinant = document.getElementById("det");
    let transResult = document.getElementById("transResult");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let tableC = document.getElementById("tableC");

	times.classList.remove('hidden');
	X.classList.remove('hidden');

    tableB.classList.add('hidden');
    plus.classList.add('hidden');
    minus.classList.add('hidden');
    det.classList.add('hidden');
    determinant.classList.add('hidden');
    transResult.classList.add('hidden');
    tableName.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
}

function onClickPlus() {
	op='+'

    let times = document.getElementById("fasTimes");
    let minus = document.getElementById("faminus");
    let plus = document.getElementById("faplus");
    let tableB = document.getElementById("tableB");
    let X = document.getElementById("X");
    let det = document.getElementById("detA");
    let determinant = document.getElementById("det");
    let transResult = document.getElementById("transResult");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let tableC = document.getElementById("tableC");

	plus.classList.remove('hidden');
	tableB.classList.remove('hidden');

    minus.classList.add('hidden');
    times.classList.add('hidden');
	X.classList.add('hidden');
    det.classList.add('hidden');
    determinant.classList.add('hidden');
    transResult.classList.add('hidden');
    tableName.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
}

function onClickMinus() {
	op='-';

    let times = document.getElementById("fasTimes");
    let minus = document.getElementById("faminus");
    let plus = document.getElementById("faplus");
    let tableB = document.getElementById("tableB");
    let X = document.getElementById("X");
    let det = document.getElementById("detA");
    let determinant = document.getElementById("det");
    let transResult = document.getElementById("transResult");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let tableC = document.getElementById("tableC");
   
    minus.classList.remove('hidden');
    tableB.classList.remove('hidden');

	plus.classList.add('hidden');
	times.classList.add('hidden');
	X.classList.add('hidden');
    det.classList.add('hidden');
    determinant.classList.add('hidden');
    transResult.classList.add('hidden');
    tableName.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
}

function onClickTimes() {
	op='*';

    let times = document.getElementById("fasTimes");
    let minus = document.getElementById("faminus");
    let plus = document.getElementById("faplus");
    let tableB = document.getElementById("tableB");
    let X = document.getElementById("X");
    let det = document.getElementById("detA");
    let determinant = document.getElementById("det");
    let transResult = document.getElementById("transResult");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let tableC = document.getElementById("tableC");

	times.classList.remove('hidden');
    tableB.classList.remove('hidden');
    
    plus.classList.add('hidden');  
	minus.classList.add('hidden');
	X.classList.add('hidden');
    det.classList.add('hidden');
    determinant.classList.add('hidden');
    transResult.classList.add('hidden');
    tableName.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
}

function onClickDet() {
    op='det';

    let times = document.getElementById("fasTimes");
    let minus = document.getElementById("faminus");
    let plus = document.getElementById("faplus");
    let tableB = document.getElementById("tableB");
    let X = document.getElementById("X");
    let determinant = document.getElementById("det");
    let transResult = document.getElementById("transResult");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let tableC = document.getElementById("tableC");

    determinant.classList.remove('hidden');

    plus.classList.add('hidden');
    times.classList.add('hidden');
    minus.classList.add('hidden');
    tableB.classList.add('hidden');
    X.classList.add('hidden');
    transResult.classList.add('hidden');
    tableName.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
}

function onClickTransport() {
    op='transp';

    let times = document.getElementById("fasTimes");
    let minus = document.getElementById("faminus");
    let plus = document.getElementById("faplus");
    let X = document.getElementById("X");
    let det = document.getElementById("detA");
    let determinant = document.getElementById("det");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let tableC = document.getElementById("tableC");
    
    tableName.classList.remove('hidden');

    plus.classList.add('hidden');
    times.classList.add('hidden');
    minus.classList.add('hidden');
    tableB.classList.add('hidden');
    X.classList.add('hidden');
    det.classList.add('hidden');
    determinant.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');

}

function onClickInverse() {
    op='inv';

    let times = document.getElementById("fasTimes");
    let minus = document.getElementById("faminus");
    let plus = document.getElementById("faplus");
    let tableB = document.getElementById("tableB");
    let X = document.getElementById("X");
    let det = document.getElementById("detA");
    let determinant = document.getElementById("det");
    let transResult = document.getElementById("transResult");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let tableC = document.getElementById("tableC");

    det.classList.add('hidden');
    determinant.classList.add('hidden');
    plus.classList.add('hidden');
    times.classList.add('hidden');
    minus.classList.add('hidden');
    tableB.classList.add('hidden');
    X.classList.add('hidden');
    transResult.classList.add('hidden');
    tableName.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
}
