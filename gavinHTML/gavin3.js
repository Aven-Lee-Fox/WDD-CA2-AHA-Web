// Function to resize the image by changing its width and height
function resizeImage() {
    // Get the image element
    let img = document.getElementById('rah');

    // Set new width and height
    img.width = 5000;  // Set the new width to 300px
    img.height = 400; // Set the new height to 300px
}

function changeTextColor() {
    // Change the text color of the input box to red
    document.getElementById("TextArea").style.color = 'red';

    // Change the text color of the textarea to green
    document.getElementById("TextArea").style.color = 'green';
}