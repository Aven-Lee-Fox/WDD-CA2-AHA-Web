function randomTarget() {
    const targetList = ["One such target set by the unitied nations, is to ensure sustainable food production via improved systems. This involves the implementation of resilient farming practices that help maintain local ecosystems and strength the capacity of both for climate change and extreme weather conditions",
        "Oh boy another initiative",
        "A third one",
        "Test"];
    
    prevInteger = 0;

    prevInteger = integer;
    while (prevInteger == integer) {
        integer = Math.floor(Math.random() * targetList.length); // Generates a random number between 1 and the amount of target in array
    }
    let textToBeInserted = targetList[integer];
    document.getElementById("randIn").innerHTML = textToBeInserted;
}

// Variables
var prevInteger;
var integer;