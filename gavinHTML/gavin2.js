function changeImage() {
    var image=document.getElementById("sadman");
    image.src="../images/sadface.jpg"; // Change the src to the new image
}


function showHide(){ //shows and hides the list of illnesses with a toggle, starts hidden then shows upon click of a button and when shown the button will hide it
	
	let doc= document.getElementById("JMShowHide");
    let button= document.getElementById("buttonText");
	
	if(doc.style.display == 'inline'){
			
		

        doc.style.display = 'none'; //if the display is shown this will hide it

        button.innerText = "Show illnesses list"; // changes the button to say "show" instead of "hide"
			
	} else{
			
        doc.style.display = 'inline'; // if the display is none this will show it

        button.innerText = "Hide illnesses list"; // changes the button to say "hide" instead of "show"
			
	}
	
    
	
}


