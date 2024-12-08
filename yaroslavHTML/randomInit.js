//Author: Yaroslav Kondaurov
//Description: Takes a random string from array to be inserted into the inner HTML in the generating random target/fact/initiative

function randomTarget() {
    const targetList = [ // Text to be used in the generate a random target. Simply adding more, adds more options to be rolled in the random generator
        "One such target set by the unitied nations, is to ensure sustainable food production via improved systems. This involves the implementation of resilient farming practices that help maintain local ecosystems and strength the capacity of both for climate change and extreme weather conditions",
        "Oh boy another initiative",
        "A third one",
        "Test"
    ];

    // This section ensures the same integer is not the same as the previously used one. To make the same target not appear twice or more in a row
    prevInteger = integer; // Sets the previous integer to the currernt integer
    while (prevInteger == integer) { // While method to run continously to ensure the previous integer is not the same as the new integer
        integer = Math.floor(Math.random() * targetList.length); // Generates a random number between 1 and the amount of target in array
    }
    let textToBeInserted = targetList[integer]; // Grabs the string from the array. Position is array is determined by which integer was generated beforehand
    document.getElementById("randIn").innerHTML = textToBeInserted; // Put the string into the inner HTML to be displayed
}

// Variables
var prevInteger; //Initialize global variables
var integer;