function openModal(id) {
    let text = document.getElementById("myModal"); // Get the element of entire modal box and sends it to text variable
    text.style.display = "block"; // Sets the modal style to block from none which 

    let oldText = document.getElementById("modalText").textContent; // Gets the ID of the element of the paragraph that is contained within the modal box
    let newText = document.getElementById(id.id).textContent; // Gets the ID of the element from where the function has been called
    newText = newText.replace(oldText, newText);
    document.getElementById("modalText").innerHTML = newText;
}

function closeModal () {
    let text = document.getElementById("myModal");
    text.style.display = "none";
}