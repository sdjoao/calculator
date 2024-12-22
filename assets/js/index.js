
const clear = document.getElementById("clear");
var screen = document.getElementById("result");


function ClearScreen(){
    screen.value = "";
}

function insertInScreen(num){
    screen.value += num;
}

function callResult(){

    try{
        screen.value = eval(screen.value);
    }catch(error){
        alert("Não é possível adicionar dois operadores lado a lado!")
    }
}