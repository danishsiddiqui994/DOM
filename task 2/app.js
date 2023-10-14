let numberText = document.getElementById('number');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let number= 0;

function decreaseHandler(){

    if (number > 0){
        number--;
        numberText.innerHTML=number
    }

}

function resetHandler(){

    number=0
    numberText.innerHTML=number;
}


function increaseHandler(){
    number++;
    numberText.innerHTML=number;


}
