'use strict'; 

function onKeyArrows() {
	if (keyCode == "38") {
	
	} else if (keyCode == "40") {
		
	} else if (keyCode == "39") {
		
	} else if (keyCode == "37") {
		
	} else {
		return;
	}
}

function changeTableSize() {
    let tableA = document.getElementById("table");
    let tableB = document.getElementById("tableB");
    let tableA4x4 = document.getElementById("tableA4x4");
    let tableB4x4 = document.getElementById("tableB4x4");
    let tableA2x2 = document.getElementById("tableA2x2");
    let tableB2x2 = document.getElementById("tableB2x2");
    let tableC = document.getElementById("tableC");
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');
    let times = document.getElementById("fasTimes");
    let minus = document.getElementById("faminus");
    let plus = document.getElementById("faplus");
    let X = document.getElementById("X");
    let det = document.getElementById("detA");
    let determinant = document.getElementById("det");
    let transResult = document.getElementById("transResult");
    let tableName = document.getElementById("tableName");
    let fas_equals = document.getElementById("fas_equals");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");

    let inverseTable = document.getElementById("inverseTable");

    let e = document.getElementById("selectSize");
    let selValue = e.value;

    op = '';

    switch (selValue) {
    case '2': 
        tableA2x2.classList.remove('hidden');
        tableB2x2.classList.remove('hidden');

        tableA.classList.add('hidden');
        tableB.classList.add('hidden');
        tableA4x4.classList.add('hidden');
        tableB4x4.classList.add('hidden');

        plus.classList.add('hidden');
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
        tableC2x2.classList.add('hidden');
        tableC4x4.classList.add('hidden');
        transResult.classList.add('hidden');
        inverseTable.classList.add('hidden');
        break;

     case '4':
        tableA4x4.classList.remove('hidden');
        tableB4x4.classList.remove('hidden');

        tableA.classList.add('hidden');
        tableB.classList.add('hidden');
        tableA2x2.classList.add('hidden');
        tableB2x2.classList.add('hidden');

        plus.classList.add('hidden');
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
        tableC2x2.classList.add('hidden');
        tableC4x4.classList.add('hidden');
        transResult.classList.add('hidden');
        inverseTable.classList.add('hidden');
        X.style.marginTop = '50px';
        break;
    
    default:
        tableA.classList.remove('hidden');
        tableB.classList.remove('hidden');

        tableA2x2.classList.add('hidden');
        tableA4x4.classList.add('hidden');
        tableB2x2.classList.add('hidden');
        tableB4x4.classList.add('hidden');

        plus.classList.add('hidden');
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
        tableC2x2.classList.add('hidden');
        tableC4x4.classList.add('hidden');
        transResult.classList.add('hidden');
        inverseTable.classList.add('hidden');
        break;
    }

}


let op;
  function calcTables() {
  	let tableC = document.getElementById("tableC");
    let tableB = document.getElementById("tableB");
    let tableA = document.getElementById("table");
    let fas_equals = document.getElementById("fas_equals");
    let transResult = document.getElementById("transResult");
    let numX = document.getElementById("numX");
    let inversed = document.getElementById("inversed");
    let det = document.getElementById("detA");
    let tableC2x2 = document.getElementById("tableC2x2");
    let tableC4x4 = document.getElementById("tableC4x4");
    let styleX = document.getElementById('X');
    let inverseTable = document.getElementById("inverseTable");

    let e = document.getElementById("selectSize");
    let selValue = e.value;

    if (selValue == "3") {
        tableC.classList.remove("hidden");
        tableC2x2.classList.add("hidden");
        tableC4x4.classList.add('hidden');
    } else if (selValue == "2") {
        tableC2x2.classList.remove('hidden');
        tableC.classList.add("hidden");
        tableC4x4.classList.add('hidden');
    } else {
        tableC4x4.classList.remove('hidden');
        tableC.classList.add("hidden");
        tableC2x2.classList.add("hidden");
    }
    fas_equals.classList.remove("hidden");

    tableC.style.fontSize = "16px";

    let c11s2x2;
    let c11s2x2s = document.getElementById('c11s2x2');
    let c12s2x2;
    let c21s2x2;
    let c22s2x2;

    let c11;
    let c12;
    let c13;
    let c21;
    let c22;
    let c23;
    let c31;
    let c32;
    let c33;

    let c11s4x4;
    let c12s4x4;
    let c13s4x4;
    let c14;
    let c21s4x4;
    let c22s4x4;
    let c22s4x4s = document.getElementById('c22s4x4');
    let c23s4x4;
    let c24;
    let c31s4x4;
    let c32s4x4;
    let c33s4x4;
    let c34;
    let c41;
    let c42;
    let c43;
    let c44;

    let d11;
    let d12;
    let d13;
    let d14;
    let d21;
    let d22;
    let d23;
    let d24;
    let d31;
    let d32;
    let d33;
    let d34;
    let d41;
    let d42;
    let d43;
    let d44;

    let r11;
    let r12;
    let r13;
    let r14;
    let r21;
    let r22;
    let r23;
    let r24;
    let r31;
    let r32;
    let r33;
    let r34;
    let r41;
    let r42;
    let r43;
    let r44;
    
    let a11s2x2 = Number(document.getElementById("a11s2x2").value);
    let a12s2x2 = Number(document.getElementById("a12s2x2").value);
    let a21s2x2 = Number(document.getElementById("a21s2x2").value);
    let a22s2x2 = Number(document.getElementById("a22s2x2").value);

    let b11s2x2 = Number(document.getElementById("b11s2x2").value);
    let b12s2x2 = Number(document.getElementById("b12s2x2").value);
    let b21s2x2 = Number(document.getElementById("b21s2x2").value);
    let b22s2x2 = Number(document.getElementById("b22s2x2").value);


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

    let a11s4x4 = Number(document.getElementById("a11s4x4").value);
    let a12s4x4 = Number(document.getElementById("a12s4x4").value);
    let a13s4x4 = Number(document.getElementById("a13s4x4").value);
    let a14 = Number(document.getElementById("a14").value);
    let a21s4x4 = Number(document.getElementById("a21s4x4").value);
    let a22s4x4 = Number(document.getElementById("a22s4x4").value);
    let a23s4x4 = Number(document.getElementById("a23s4x4").value);
    let a24 = Number(document.getElementById("a24").value);
    let a31s4x4 = Number(document.getElementById("a31s4x4").value);
    let a32s4x4 = Number(document.getElementById("a32s4x4").value);
    let a33s4x4 = Number(document.getElementById("a33s4x4").value);
    let a34 = Number(document.getElementById("a34").value);
    let a41 = Number(document.getElementById("a41").value);
    let a42 = Number(document.getElementById("a42").value);
    let a43 = Number(document.getElementById("a43").value);
    let a44 = Number(document.getElementById("a44").value);

    let b11s4x4 = Number(document.getElementById("b11s4x4").value);
    let b12s4x4 = Number(document.getElementById("b12s4x4").value);
    let b13s4x4 = Number(document.getElementById("b13s4x4").value);
    let b14 = Number(document.getElementById("b14").value);
    let b21s4x4 = Number(document.getElementById("b21s4x4").value);
    let b22s4x4 = Number(document.getElementById("b22s4x4").value);
    let b23s4x4 = Number(document.getElementById("b23s4x4").value);
    let b24 = Number(document.getElementById("b24").value);
    let b31s4x4 = Number(document.getElementById("b31s4x4").value);
    let b32s4x4 = Number(document.getElementById("b32s4x4").value);
    let b33s4x4 = Number(document.getElementById("b33s4x4").value);
    let b34 = Number(document.getElementById("b34").value);
    let b41 = Number(document.getElementById("b41").value);
    let b42 = Number(document.getElementById("b42").value);
    let b43 = Number(document.getElementById("b43").value);
    let b44 = Number(document.getElementById("b44").value);

    let X = Number(document.getElementById("X").value);
    let detA;

    switch (op) {
      case '+':
        if (selValue == "3") {
        c11 = a11 + b11;
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
    } else if (selValue == "2") {
        c11s2x2 = a11s2x2 + b11s2x2;
        c12s2x2 = a12s2x2 + b12s2x2;
        c21s2x2 = a21s2x2 + b21s2x2;
        c22s2x2 = a22s2x2 + b22s2x2;

        tableA2x2.style.marginTop = '5px';
        tableB2x2.style.marginTop = '5px';
    } else {
        c11s4x4 = a11s4x4 + b11s4x4;
        c12s4x4 = a12s4x4 + b12s4x4;
        c13s4x4 = a13s4x4 + b13s4x4;
        c14 = a14 + b14;
        c21s4x4 = a21s4x4 + b21s4x4;
        c22s4x4 = a22s4x4 + b22s4x4;
        c23s4x4 = a23s4x4 + b23s4x4;
        c24 = a24 + b24;
        c31s4x4 = a31s4x4 + b31s4x4;
        c32s4x4 = a32s4x4 + b32s4x4;
        c33s4x4 = a33s4x4 + b33s4x4;
        c34 = a34 + b34;
        c41 = a41 + b41;
        c42 = a42 + b42;
        c43 = a43 + b43;
        c44 = a44 + b44;
    tableA4x4.style.marginTop = '62px';
    tableB4x4.style.marginTop = '62px';
    }
        
        break;
      case '-':
      if (selValue == "3") {
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
    } else if (selValue == "2") {
    c11s2x2 = a11s2x2 - b11s2x2;
    c12s2x2 = a12s2x2 - b12s2x2;
    c21s2x2 = a21s2x2 - b21s2x2;
    c22s2x2 = a22s2x2 - b22s2x2;

    tableA2x2.style.marginTop = '5px';
    tableB2x2.style.marginTop = '5px';
    } else {
    c11s4x4 = a11s4x4 - b11s4x4;
    c12s4x4 = a12s4x4 - b12s4x4;
    c13s4x4 = a13s4x4 - b13s4x4;
    c14 = a14 - b14;
    c21s4x4 = a21s4x4 - b21s4x4;
    c22s4x4 = a22s4x4 - b22s4x4;
    c23s4x4 = a23s4x4 - b23s4x4;
    c24 = a24 - b24;
    c31s4x4 = a31s4x4 - b31s4x4;
    c32s4x4 = a32s4x4 - b32s4x4;
    c33s4x4 = a33s4x4 - b33s4x4;
    c34 = a34 - b34;
    c41 = a41 - b41;
    c42 = a42 - b42;
    c43 = a43 - b43;
    c44 = a44 - b44;
    tableA4x4.style.marginTop = '62px';
    tableB4x4.style.marginTop = '62px';
    }

        break;
      case '*':
      if (selValue == "3") {
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
    } else if (selValue == "2") {
    c11s2x2 = a11s2x2*b11s2x2+a12s2x2*b21s2x2;
    c12s2x2 = a11s2x2*b12s2x2+a12s2x2*b22s2x2;
    c21s2x2 = a21s2x2*b11s2x2+a22s2x2*b21s2x2;
    c22s2x2 = a21s2x2*b12s2x2+a22s2x2*b22s2x2;

    tableA2x2.style.marginTop = '5px';
    tableB2x2.style.marginTop = '5px';
    } else {
    c11s4x4 = a11s4x4*b11s4x4+a12s4x4*b21s4x4+a13s4x4*b31s4x4+a14*b41;
    c12s4x4 = a11s4x4*b12s4x4+a12s4x4*b22s4x4+a13s4x4*b32s4x4+a14*b42;
    c13s4x4 = a11s4x4*b13s4x4+a12s4x4*b23s4x4+a13s4x4*b33s4x4+a14*b43;
    c14 = a11s4x4*b14+a12s4x4*b24+a13s4x4*b34+a14*b44;
    c21s4x4 = a21s4x4*b11s4x4+a22s4x4*b21s4x4+a23s4x4*b31s4x4+a24*b41;
    c22s4x4 = a21s4x4*b12s4x4+a22s4x4*b22s4x4+a23s4x4*b32s4x4+a24*b42;
    c23s4x4 = a21s4x4*b13s4x4+a22s4x4*b23s4x4+a23s4x4*b33s4x4+a24*b43;
    c24 = a21s4x4*b14+a22s4x4*b24+a23s4x4*b34+a24*b44;
    c31s4x4 = a31s4x4*b11s4x4+a32s4x4*b21s4x4+a33s4x4*b31s4x4+a34*b41;
    c32s4x4 = a31s4x4*b12s4x4+a32s4x4*b22s4x4+a33s4x4*b32s4x4+a34*b42;
    c33s4x4 = a31s4x4*b13s4x4+a32s4x4*b23s4x4+a33s4x4*b33s4x4+a34*b43;
    c34 = a31s4x4*b14+a32s4x4*b24+a33s4x4*b34+a34*b44;
    c41 = a41*b11s4x4+a42*b21s4x4+a43*b31s4x4+a44*b41;
    c42 = a41*b12s4x4+a42*b22s4x4+a43*b32s4x4+a44*b42;
    c43 = a41*b13s4x4+a42*b23s4x4+a43*b33s4x4+a44*b43;
    c44 = a41*b14+a42*b24+a43*b34+a44*b44;
    tableA4x4.style.marginTop = '62px';
    tableB4x4.style.marginTop = '62px';
    }
        
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
                    if (selValue == "3") {
                    c11 = a11 * X;
                    c12 = a12 * X;
                    c13 = a13 * X;
                    c21 = a21 * X;
                    c22 = a22 * X;
                    c23 = a23 * X;
                    c31 = a31 * X;
                    c32 = a32 * X;
                    c33 = a33 * X;
                    tableB.style.marginTop = "25px";
                    tableA.style.marginTop = "25px";
                    document.getElementById("X").style.marginTop = "82px";
                } else if (selValue == "2") {
                    c11s2x2 = a11s2x2 * X;
                    c12s2x2 = a12s2x2 * X;
                    c21s2x2 = a21s2x2 * X;
                    c22s2x2 = a22s2x2 * X;

                    styleX.style.marginTop = '50px';
                    tableA2x2.style.marginTop = '5px';
                } else {
                    c11s4x4 = a11s4x4 * X;
                    c12s4x4 = a12s4x4 * X;
                    c13s4x4 = a13s4x4 * X;
                    c14 = a14 * X;
                    c21s4x4 = a21s4x4 * X;
                    c22s4x4 = a22s4x4 * X;
                    c23s4x4 = a23s4x4 * X;
                    c24 = a24 * X;
                    c31s4x4 = a31s4x4 * X;
                    c32s4x4 = a32s4x4 * X;
                    c33s4x4 = a33s4x4 * X;
                    c34 = a34 * X;
                    c41 = a41 * X;
                    c42 = a42 * X;
                    c43 = a43 * X;
                    c44 = a44 * X;
                    tableA4x4.style.marginTop = '62px';
                    tableB4x4.style.marginTop = '62px';
                    styleX.style.marginTop = '112px';
                }
        numX.classList.add('hidden');
        }

     else {
        numX.classList.remove('hidden');
        document.getElementById("numX").innerHTML = X;
        if (selValue == "3") {
        c11 = a11;
        c12 = a12;
        c13 = a13;
        c21 = a21;
        c22 = a22;
        c23 = a23;
        c31 = a31;
        c32 = a32;
        c33 = a33;
        tableB.style.marginTop = "25px";
        tableA.style.marginTop = "25px";
        document.getElementById("X").style.marginTop = "82px";
        } else if (selValue == "2") {
            c11s2x2 = a11s2x2;
            c12s2x2 = a12s2x2;
            c21s2x2 = a21s2x2;
            c22s2x2 = a22s2x2;
            tableA2x2.style.marginTop = '5px';
        } else {
            c11s4x4 = a11s4x4;
            c12s4x4 = a12s4x4;
            c13s4x4 = a13s4x4;
            c14 = a14;
            c21s4x4 = a21s4x4;
            c22s4x4 = a22s4x4;
            c23s4x4 = a23s4x4;
            c24 = a24;
            c31s4x4 = a31s4x4;
            c32s4x4 = a32s4x4;
            c33s4x4 = a33s4x4;
            c34 = a34;
            c41 = a41;
            c42 = a42;
            c43 = a43;
            c44 = a44;
            tableA4x4.style.marginTop = '62px';
            tableB4x4.style.marginTop = '62px';
        }
    }
        break;
        case 'det':
        if (selValue == "3") {
            detA = a11*a22*a33+a31*a12*a23+a21*a32*a13-a31*a22*a13-a11*a32*a23-a21*a12*a33;
        } else if (selValue == "2") {
            detA = a11s2x2*a22s2x2-a12s2x2*a21s2x2
        } else {
            detA = a11s4x4*a22s4x4*a33s4x4*a44 + a11s4x4*a23s4x4*a34*a42 + a11s4x4*a24*a32s4x4*a43 + a12s4x4*a21s4x4*a34*a43 + a12s4x4*a23s4x4*a31s4x4*a44 + a12s4x4*a24*a33s4x4*a41 + a13s4x4*a21s4x4*a32s4x4*a44 + a13s4x4*a22s4x4*a34*a41 + a13s4x4*a24*a31s4x4*a42 + a14*a21s4x4*a33s4x4*a42 + a14*a22s4x4*a31s4x4*a43 + a14*a23s4x4*a32s4x4*a41 - a11s4x4*a22s4x4*a34*a43 - a11s4x4*a23s4x4*a32s4x4*a44 - a11s4x4*a24*a33s4x4*a42 - a12s4x4*a21s4x4*a33s4x4*a44 - a12s4x4*a23s4x4*a34*a41 - a12s4x4*a24*a31s4x4*a43 - a13s4x4*a21s4x4*a34*a42 - a13s4x4*a22s4x4*a31s4x4*a44 - a13s4x4*a24*a32s4x4*a41 - a14*a21s4x4*a32s4x4*a43 - a14*a22s4x4*a33s4x4*a41 - a14*a23s4x4*a31s4x4*a42;
        }

        tableC.classList.add("hidden");
        tableC2x2.classList.add("hidden");
        tableC4x4.classList.add("hidden");
        det.classList.remove('hidden');
        break;
        case 'transp':
        if (selValue == "3") {
        c11 = a11;
        c12 = a21;
        c13 = a31;
        c21 = a12;
        c22 = a22;
        c23 = a32;
        c31 = a13;
        c32 = a23;
        c33 = a33;
    } else if (selValue == "2") {
        c11s2x2 = a11s2x2;
        c12s2x2 = a21s2x2;
        c21s2x2 = a12s2x2;
        c22s2x2 = a22s2x2;

        tableA2x2.style.marginTop = '5px';
    } else {
        c11s4x4 = a11s4x4;
        c12s4x4 = a21s4x4;
        c13s4x4 = a31s4x4;
        c14 = a41;
        c21s4x4 = a12s4x4;
        c22s4x4 = a22s4x4;
        c23s4x4 = a32s4x4;
        c24 = a42;
        c31s4x4 = a13s4x4;
        c32s4x4 = a23s4x4;
        c33s4x4 = a33s4x4;
        c34 = a43;
        c41 = a14;
        c42 = a24;
        c43 = a34;
        c44 = a44;
        tableA4x4.style.marginTop = '62px';
        tableB4x4.style.marginTop = '62px';
    }
        transResult.classList.remove('hidden');
        tableA.style.marginTop = "25px";
        break;
        case 'inv':
        if (selValue == "3") {
        detA = a11*a22*a33+a31*a12*a23+a21*a32*a13-a31*a22*a13-a11*a32*a23-a21*a12*a33;
            if (detA == 0) {
            c11 = '';
            c12 = '';
            c13 = '';
            c21 = '';
            c22 = 'определитель = 0, поэтому нельзя сделать обратную таблицу';
            c23 = '';
            c31 = '';
            c32 = '';
            c33 = '';
        } else {
        d11 = a22*a33-a23*a32;
        d12 = -(a12*a33-a13*a32);
        d13 = a12*a23-a13*a22;
        d21 = -(a21*a33-a23*a31);
        d22 = a11*a33-a13*a31;
        d23 = -(a11*a23-a13*a21);
        d31 = a21*a32-a22*a31;
        d32 = -(a11*a32-a12*a31);
        d33 = a11*a22-a12*a21;

        c11 = d11*(1/detA);
        c12 = d12*(1/detA);
        c13 = d13*(1/detA);
        c21 = d21*(1/detA);
        c22 = d22*(1/detA);
        c23 = d23*(1/detA);
        c31 = d31*(1/detA);
        c32 = d32*(1/detA);
        c33 = d33*(1/detA);
        tableA.style.marginTop = "25px";
    }

} else if (selValue == "2") {
    detA = a11s2x2*a22s2x2-a12s2x2*a21s2x2;
    if (detA == 0) {
        c11s2x2 = 'определитель = 0, поэтому нельзя сделать обратную таблицу';
        c12s2x2 = '';
        c21s2x2 = '';
        c22s2x2 = '';
        tableA2x2.style.marginTop = '5px';
    } else {            
    d11 = a22s2x2;
    d12 = -(a12s2x2);
    d21 = -(a21s2x2);
    d22 = a11s2x2;

    c11s2x2 = d11*(1/detA);
    c12s2x2 = d12*(1/detA);
    c21s2x2 = d21*(1/detA);
    c22s2x2 = d22*(1/detA);
    tableA2x2.style.marginTop = '5px';
    }
} else {
    detA = a11s4x4*a22s4x4*a33s4x4*a44 + a11s4x4*a23s4x4*a34*a42 + a11s4x4*a24*a32s4x4*a43 + a12s4x4*a21s4x4*a34*a43 + a12s4x4*a23s4x4*a31s4x4*a44 + a12s4x4*a24*a33s4x4*a41 + a13s4x4*a21s4x4*a32s4x4*a44 + a13s4x4*a22s4x4*a34*a41 + a13s4x4*a24*a31s4x4*a42 + a14*a21s4x4*a33s4x4*a42 + a14*a22s4x4*a31s4x4*a43 + a14*a23s4x4*a32s4x4*a41 - a11s4x4*a22s4x4*a34*a43 - a11s4x4*a23s4x4*a32s4x4*a44 - a11s4x4*a24*a33s4x4*a42 - a12s4x4*a21s4x4*a33s4x4*a44 - a12s4x4*a23s4x4*a34*a41 - a12s4x4*a24*a31s4x4*a43 - a13s4x4*a21s4x4*a34*a42 - a13s4x4*a22s4x4*a31s4x4*a44 - a13s4x4*a24*a32s4x4*a41 - a14*a21s4x4*a32s4x4*a43 - a14*a22s4x4*a33s4x4*a41 - a14*a23s4x4*a31s4x4*a42;
if (detA == 0) {
    c22s4x4 = 'определитель = 0, поэтому нельзя сделать обратную таблицу';
    c11s4x4 = '';
    c12s4x4 = '';
    c13s4x4 = '';
    c14 = '';
    c21s4x4 = '';
    c23s4x4 = '';
    c24 = '';
    c31s4x4 = '';
    c32s4x4 = '';
    c33s4x4 = '';
    c34 = '';
    c41 = '';
    c42 = '';
    c43 = '';
    c44 = '';
    tableA4x4.style.marginTop = '30px';
    tableB4x4.style.marginTop = '30px';
    inverseTable.style.marginTop = '15px';
} else {            
    d11 = a22s4x4*a33s4x4*a44+a42*a23s4x4*a34+a32s4x4*a43*a24-a24*a33s4x4*a42-a23s4x4*a32s4x4*a44-a34*a43*a22s4x4;
    d21 = a21s4x4*a33s4x4*a44+a23s4x4*a34*a41+a31s4x4*a43*a24-a23s4x4*a31s4x4*a44-a24*a33s4x4*a41-a34*a43*a21s4x4;
    d31 = a21s4x4*a32s4x4*a44+a22s4x4*a34*a41+a31s4x4*a42*a24-a22s4x4*a31s4x4*a44-a24*a32s4x4*a41-a34*a42*a21s4x4;
    d41 = a21s4x4*a32s4x4*a43+a22s4x4*a33s4x4*a41+a31s4x4*a42*a23s4x4-a22s4x4*a31s4x4*a43-a23s4x4*a32s4x4*a41-a33s4x4*a42*a21s4x4;
    d12 = a12s4x4*a33s4x4*a44+a13s4x4*a34*a42+a32s4x4*a43*a14-a13s4x4*a32s4x4*a44-a14*a33s4x4*a42-a34*a43*a12s4x4;
    d22 = a11s4x4*a33s4x4*a44+a13s4x4*a34*a41+a31s4x4*a43*a14-a13s4x4*a31s4x4*a44-a14*a33s4x4*a41-a34*a43*a11s4x4;
    d32 = a11s4x4*a32s4x4*a44+a31s4x4*a42*a14+a12s4x4*a34*a41-a12s4x4*a31s4x4*a44-a14*a32s4x4*a41-a34*a42*a11s4x4;
    d42 = a11s4x4*a32s4x4*a43+a31s4x4*a42*a13s4x4+a12s4x4*a33s4x4*a41-a12s4x4*a31s4x4*a43-a13s4x4*a32s4x4*a41-a33s4x4*a42*a11s4x4;
    d13 = a12s4x4*a23s4x4*a44+a13s4x4*a24*a42+a22s4x4*a43*a14-a13s4x4*a22s4x4*a44-a14*a23s4x4*a42-a24*a43*a12s4x4;
    d23 = a11s4x4*a23s4x4*a44+a13s4x4*a24*a41+a21s4x4*a43*a14-a13s4x4*a21s4x4*a44-a24*a43*a11s4x4-a14*a23s4x4*a41;
    d33 = a11s4x4*a22s4x4*a44+a21s4x4*a42*a14+a12s4x4*a24*a41-a12s4x4*a21s4x4*a44-a14*a22s4x4*a41-a24*a42*a11s4x4;
    d43 = a11s4x4*a22s4x4*a43+a12s4x4*a23s4x4*a41+a21s4x4*a42*a13s4x4-a12s4x4*a21s4x4*a43-a13s4x4*a22s4x4*a41-a23s4x4*a42*a11s4x4;
    d14 = a12s4x4*a23s4x4*a34+a13s4x4*a24*a32s4x4+a22s4x4*a33s4x4*a14-a13s4x4*a22s4x4*a34-a14*a23s4x4*a32s4x4-a24*a33s4x4*a12s4x4;
    d24 = a11s4x4*a23s4x4*a34+a21s4x4*a33s4x4*a14+a13s4x4*a24*a31s4x4-a13s4x4*a21s4x4*a34-a14*a23s4x4*a31s4x4-a24*a33s4x4*a11s4x4;
    d34 = a11s4x4*a22s4x4*a34+a21s4x4*a32s4x4*a14+a12s4x4*a24*a31s4x4-a12s4x4*a21s4x4*a34-a14*a22s4x4*a31s4x4-a24*a32s4x4*a11s4x4;
    d44 = a11s4x4*a22s4x4*a33s4x4+a31s4x4*a12s4x4*a23s4x4+a21s4x4*a32s4x4*a13s4x4-a31s4x4*a22s4x4*a13s4x4-a11s4x4*a32s4x4*a23s4x4-a21s4x4*a12s4x4*a33s4x4;

    r11 = d11*(1/detA);
    r12 = -d12*(1/detA);
    r13 = d13*(1/detA);
    r14 = -d14*(1/detA);
    r21 = -d21*(1/detA);
    r22 = d22*(1/detA);
    r23 = -d23*(1/detA);
    r24 = d24*(1/detA);
    r31 = d31 *(1/detA);
    r32 = -d32*(1/detA);
    r33 = d33*(1/detA);
    r34 = -d34*(1/detA);
    r41 = -d41*(1/detA);
    r42 = d42*(1/detA);
    r43 = -d43*(1/detA);
    r44 = d44*(1/detA);

    c11s4x4 = r11.toFixed(2);
    c12s4x4 = r12.toFixed(2);
    c13s4x4 = r13.toFixed(2);
    c14 = r14.toFixed(2);
    c21s4x4 = r21.toFixed(2);
    c22s4x4 = r22.toFixed(2);
    c23s4x4 = r23.toFixed(2);
    c24 = r24.toFixed(2);
    c31s4x4 = r31.toFixed(2);
    c32s4x4 = r32.toFixed(2);
    c33s4x4 = r33.toFixed(2);
    c34 = r34.toFixed(2);
    c41 = r41.toFixed(2);
    c42 = r42.toFixed(2);
    c43 = r43.toFixed(2);
    c44 = r44.toFixed(2);

    tableA4x4.style.marginTop = '62px';
    tableB4x4.style.marginTop = '62px';

    inverseTable.style.marginTop = '43px';
    }

}
        inversed.classList.remove('hidden');

        break;
      default:
        c11 = '';
        c11s2x2 = 'выберите операцию';
        c11s4x4 = '';
        c12 = '';
        c12s2x2 = '';
        c12s4x4 = '';
        c13 = '';
        c13s4x4 = '';
        c14 = '';
        c21 = '';
        c21s2x2 = '';
        c21s4x4 = '';
        c22 = 'выберите операцию';
        c22s2x2 = '';
        c22s4x4 = 'выберите операцию';
        c23 = '';
        c23s4x4 = '';
        c24 = '';
        c31 = '';
        c31s4x4 = '';
        c32 = '';
        c32s4x4 = '';
        c33 = '';
        c33s4x4 = '';
        c34 = '';
        c41 = '';
        c42 = '';
        c43 = '';
        c44 = '';

        tableA4x4.style.marginTop = '10px';
        tableB4x4.style.marginTop = '10px';
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

    document.getElementById("c11s2x2").innerHTML = c11s2x2;
    document.getElementById("c12s2x2").innerHTML = c12s2x2;
    document.getElementById("c21s2x2").innerHTML = c21s2x2;
    document.getElementById("c22s2x2").innerHTML = c22s2x2;

    document.getElementById("c11s4x4").innerHTML = c11s4x4;
    document.getElementById("c12s4x4").innerHTML = c12s4x4;
    document.getElementById("c13s4x4").innerHTML = c13s4x4;
    document.getElementById("c14").innerHTML = c14;
    document.getElementById("c21s4x4").innerHTML = c21s4x4;
    document.getElementById("c22s4x4").innerHTML = c22s4x4;
    document.getElementById("c23s4x4").innerHTML = c23s4x4;
    document.getElementById("c24").innerHTML = c24;
    document.getElementById("c31s4x4").innerHTML = c31s4x4;
    document.getElementById("c32s4x4").innerHTML = c32s4x4;
    document.getElementById("c33s4x4").innerHTML = c33s4x4;
    document.getElementById("c34").innerHTML = c34;
    document.getElementById("c41").innerHTML = c41;
    document.getElementById("c42").innerHTML = c42;
    document.getElementById("c43").innerHTML = c43;
    document.getElementById("c44").innerHTML = c44;

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
    let inverseTable = document.getElementById("inverseTable");
    let tableA = document.getElementById("table");
    let tableB2x2 = document.getElementById('tableB2x2');
    let tableB4x4 = document.getElementById('tableB4x4');
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');

	times.classList.remove('hidden');
	X.classList.remove('hidden');

    tableB.classList.add('hidden');
    tableB2x2.classList.add('hidden');
    tableB4x4.classList.add('hidden');
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
    transResult.classList.add('hidden');
    inverseTable.classList.add('hidden');
    tableC4x4.classList.add('hidden');
    tableC2x2.classList.add('hidden');

    tableA.style.marginTop = "0px";
    tableB.style.marginTop = "0px";
    tableA4x4.style.marginTop = '0px';
    tableB4x4.style.marginTop = '0px';
    X.style.marginTop = '50px';
}

function onClickPlus() {
	op='+'

    let e = document.getElementById("selectSize");
    let selValue = e.value;

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
    let inverseTable = document.getElementById("inverseTable");
    let tableA = document.getElementById("table");
    let tableB2x2 = document.getElementById('tableB2x2');
    let tableB4x4 = document.getElementById('tableB4x4');
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');

	plus.classList.remove('hidden');
	if (selValue == "3") { 
        tableB.classList.remove('hidden');
    } else if (selValue == "2") {
        tableB.classList.add('hidden');
        tableB2x2.classList.remove('hidden');
    } else {
        tableB.classList.add('hidden');
        tableB4x4.classList.remove('hidden');
    }


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
    transResult.classList.add('hidden');
    inverseTable.classList.add('hidden');
    tableC4x4.classList.add('hidden');
    tableC2x2.classList.add('hidden');

    tableA.style.marginTop = "0px";
    tableB.style.marginTop = "0px";

    tableA4x4.style.marginTop = '0px';
    tableB4x4.style.marginTop = '0px';
}

function onClickMinus() {
	op='-';

    let e = document.getElementById("selectSize");
    let selValue = e.value;

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
    let inverseTable = document.getElementById("inverseTable");
    let tableA = document.getElementById("table");
    let tableB2x2 = document.getElementById('tableB2x2');
    let tableB4x4 = document.getElementById('tableB4x4');
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');

    minus.classList.remove('hidden');
    if (selValue == "3") { 
        tableB.classList.remove('hidden');
    } else if (selValue == "2") {
        tableB.classList.add('hidden');
        tableB2x2.classList.remove('hidden');
    } else {
        tableB.classList.add('hidden');
        tableB4x4.classList.remove('hidden');
    }

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
    transResult.classList.add('hidden');
    inverseTable.classList.add('hidden');
    tableC4x4.classList.add('hidden');
    tableC2x2.classList.add('hidden');

    tableA.style.marginTop = "0px";
    tableB.style.marginTop = "0px";
    tableA4x4.style.marginTop = '0px';
    tableB4x4.style.marginTop = '0px';
}

function onClickTimes() {
	op='*';

    let e = document.getElementById("selectSize");
    let selValue = e.value;

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
    let inverseTable = document.getElementById("inverseTable");
    let tableA = document.getElementById("table");
    let tableB2x2 = document.getElementById('tableB2x2');
    let tableB4x4 = document.getElementById('tableB4x4');
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');

	times.classList.remove('hidden');
    if (selValue == "3") { 
        tableB.classList.remove('hidden');
    } else if (selValue == "2") {
        tableB.classList.add('hidden');
        tableB2x2.classList.remove('hidden');
    } else {
        tableB.classList.add('hidden');
        tableB4x4.classList.remove('hidden');
    }

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
    transResult.classList.add('hidden');
    inverseTable.classList.add('hidden');
    tableC4x4.classList.add('hidden');
    tableC2x2.classList.add('hidden');

    tableA.style.marginTop = "0px";
    tableB.style.marginTop = "0px";
    tableA4x4.style.marginTop = '0px';
    tableB4x4.style.marginTop = '0px';
}

function onClickDet() {
    op='det';

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
    let inverseTable = document.getElementById("inverseTable");
    let tableA = document.getElementById("table");
    let tableB2x2 = document.getElementById('tableB2x2');
    let tableB4x4 = document.getElementById('tableB4x4');
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');

    determinant.classList.remove('hidden');
    tableName.classList.remove('hidden');

    plus.classList.add('hidden');
    times.classList.add('hidden');
    minus.classList.add('hidden');
    tableB.classList.add('hidden');
    X.classList.add('hidden');
    transResult.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
    transResult.classList.add('hidden');
    inverseTable.classList.add('hidden');
    tableB2x2.classList.add('hidden');
    tableB4x4.classList.add('hidden');
    tableC4x4.classList.add('hidden');
    tableC2x2.classList.add('hidden');

    tableA.style.marginTop = "0px";
    tableB.style.marginTop = "0px";
}

function onClickTransport() {
    op='transp';

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
    let inverseTable = document.getElementById("inverseTable");
    let tableA = document.getElementById("table");
    let tableB2x2 = document.getElementById('tableB2x2');
    let tableB4x4 = document.getElementById('tableB4x4');
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');
    
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
    transResult.classList.add('hidden');
    inverseTable.classList.add('hidden');
    tableB2x2.classList.add('hidden');
    tableB4x4.classList.add('hidden');
    tableC4x4.classList.add('hidden');
    tableC2x2.classList.add('hidden');

    tableA.style.marginTop = "0px";
    tableB.style.marginTop = "0px";
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
    let inverseTable = document.getElementById("inverseTable");
    let tableA = document.getElementById("table");
    let tableB2x2 = document.getElementById('tableB2x2');
    let tableB4x4 = document.getElementById('tableB4x4');
    let tableC2x2 = document.getElementById('tableC2x2');
    let tableC4x4 = document.getElementById('tableC4x4');

    inverseTable.classList.remove('hidden');
    tableName.classList.remove('hidden');

    det.classList.add('hidden');
    determinant.classList.add('hidden');
    plus.classList.add('hidden');
    times.classList.add('hidden');
    minus.classList.add('hidden');
    tableB.classList.add('hidden');
    X.classList.add('hidden');
    transResult.classList.add('hidden');
    fas_equals.classList.add('hidden');
    numX.classList.add('hidden');
    inversed.classList.add('hidden');
    tableC.classList.add('hidden');
    transResult.classList.add('hidden');
    tableB2x2.classList.add('hidden');
    tableB4x4.classList.add('hidden');
    tableC4x4.classList.add('hidden');
    tableC2x2.classList.add('hidden');

    tableA.style.marginTop = "0px";

    tableA4x4.style.marginTop = '0px';
    tableB4x4.style.marginTop = '0px';
}
