
let number = document.getElementById("number");
let counter = 0;

function color_num(counter){
    if(counter<0){
        number.style.color="red";
    }
    else if(counter>0){
        number.style.color="green";
    }
    else{
        number.style.color="black";
    }
}

function increase(){
    counter++;
    number.textContent=counter;
    color_num(counter);
    
}
function decrease(){
    counter--;
    number.textContent=counter;
    color_num(counter);
}
function reset(){
    counter=0;
    number.textContent=counter;
    color_num(counter);
}