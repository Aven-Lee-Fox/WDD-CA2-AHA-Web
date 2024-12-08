// Function to resize the image by changing its width and height
function resizeImage() {
    // Get the image element
    let img = document.getElementById('rah');

    // Set new width and height
    img.width = 5000;  // Set the new width to 300px
    img.height = 400; // Set the new height to 300px
}

function changeRandomColor() {
    // Generate a random color
    const randomColor = getRandomColor();

    // Apply the random colour to the text that it is targeting - the text will disappear
    document.getElementById("text").style.color = randomColor;

    // Apply the random colour change to the background
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    // Generate a random hex color code
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}