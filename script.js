
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("square-heading").classList.add("display-none")
})






function myFunction(event){
    event.pereventDefault();
    document.getElementById("square-heading").classList.add("display-visible")
    

    let inputValue = document.getElementById("num").value;

    inputValue = Number(inputValue)
    document.getElementById("demo").innerHTML = inputValue * inputValue;
    document.getElementById("demo").classList.add("square")
}