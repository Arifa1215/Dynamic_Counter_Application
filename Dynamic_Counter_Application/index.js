let counterValue = document.getElementById("counterText");
function decreaseFunction(){
    let previousValue = counterValue.textContent;
    let updatedValue = parseInt(previousValue) - 1;
    if (updatedValue < 0){
        counterValue.style.color = "red";
    }
    else if (updatedValue > 0){
        counterValue.style.color ="green";
    }
    else{
        counterValue.style.color = "black"
    }
    counterValue.textContent = updatedValue;
}
function increaseFunction(){
    let previousValue = counterValue.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    if (updatedValue < 0){
        counterValue.style.color = "red";
    }
    else if (updatedValue > 0){
        counterValue.style.color ="green";
    }
    else{
        counterValue.style.color = "black"
    }
    counterValue.textContent = updatedValue;
}
function resetFunction(){
    let counterText =0 
    counterValue.textContent = counterText
    counterValue.style.color = "black"
}