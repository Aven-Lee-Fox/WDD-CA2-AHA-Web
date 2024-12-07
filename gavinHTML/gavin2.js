function changeImage() {
    var image=document.getElementById("sadman");
    image.src="../images/sadface.jpg"; // Change the src to the new image
}


function showHide(){
	
	let doc= document.getElementById("JMShowHide");
    let button= document.getElementById("buttonText");
	
	if(doc.style.display == 'none'){
			
		// if the display is none this will show it
			
		doc.style.display = 'inline';

        button.innerText = "Hide list";
			
	} else{
			
		//if the display is shown this will hide it
			
		doc.style.display = 'none';

        button.innerText = "Show list";
			
	}
	
    
	
}



