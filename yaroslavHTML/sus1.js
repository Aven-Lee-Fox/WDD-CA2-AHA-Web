function openModal(id) {
    console.log("Element ID", id.id); //Gets the ID of the element from where the function has been called

    let text = document.getElementById("myModal");
    text.style.display = "block";

    let oldText = document.getElementById("modalText").textContent;
    let newText = document.getElementById(id.id).textContent;
    newText = newText.replace(oldText, newText);
    document.getElementById("modalText").innerHTML = newText;
}

function closeModal () {
    let text = document.getElementById("myModal");
    text.style.display = "none";
}