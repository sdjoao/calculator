const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const min = document.getElementById("-");
const max = document.getElementById("+");
const mult = document.getElementById("X");
const div = document.getElementById("/");
const equal = document.getElementById("=");
const dot = document.getElementById(".");
const clear = document.getElementById("clear");

const result = document.getElementById("result");

function ClearScreen(){
    result.value = "";
}

function insertInScren(num){
    result.value += num;
}