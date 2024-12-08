// Author: Yaroslav Kondaurov
// Description: Javascript that handles modal box and text manipulation

// Functions
// Makes the modal window open with the text in its respective paragraph
function openModal(element) { // Passes the element to function
    let text = document.getElementById("myModal"); // Get the element of entire modal box and sends it to text variable
    text.style.display = "block"; // Sets the modal style to block from none which allows it to show

    let oldText = document.getElementById("modalText").textContent; // Gets the ID of the paragraph element that is contained within the modal box
    let newText = document.getElementById(element.id).textContent; // Gets the ID of the element from where the function has been called
    newText.replace(oldText, newText); // Replaces old text with the new text
    document.getElementById("modalText").innerHTML = newText; // Inserts the new text into the inner HTML
}


// Closes the modal
function closeModal () {
    let text = document.getElementById("myModal"); // Gets the element of the modal box
    text.style.display = "none"; // Sets the display from block to none which essentially disables/hides the modal box
}