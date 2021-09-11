let images = [
    "./images/dice-01.svg",
    "./images/dice-02.svg",
    "./images/dice-06.svg",
    "./images/dice-04.svg",
    "./images/dice-05.svg"
]
const rollButton = document.getElementById("roll")
let dice = document.querySelectorAll("img");
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake")
        
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        })
        let dieOneValue = Math.floor(Math.random()*images.length);
        let dieTwoValue = Math.floor(Math.random()*images.length);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue])
document.querySelector("#die-2").setAttribute("src", images[dieTwoValue])

document.querySelector("#total").innerHTML = "Your roll is " + ( ((dieOneValue)+1) + ((dieTwoValue)+1) );

console.log(dieOneValue, dieTwoValue)
    },
    1000);

    console.log(roll)
}



roll()
rollButton.addEventListener("click", roll)
