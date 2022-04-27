function forclear() {
    document.getElementById("output").innerHTML = "0";
}


function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}


function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}


function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}




function calculeretour() {

    var value = document.getElementById("output").innerHTML;
	if (value=="") {
	alert("Il faut remplir le champ nb(s) a calculer !")
	value.focus();

}else{
value= value.length
vol = value
ploplo = 1
var rerererere = eval(value-ploplo)

var retourr = value.substring(0,rerererere);
value = retourr
value.focus();
}
}
