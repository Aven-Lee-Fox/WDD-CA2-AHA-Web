function load(){

    showHide();

}


function showHide(){
	
	let doc= document.getElementById("JMShowHide");
    let button= document.getElementById("buttonText");
	
	if(doc.style.display == 'inline'){
			
		

        doc.style.display = 'none'; //if the display is shown this will hide it

        button.innerText = "Show illnesses list"; // changes the button to say "show" instead of
			
	} else{
			
        doc.style.display = 'inline'; // if the display is none this will show it

        button.innerText = "Hide illnesses list"; // changes the button to say "hide" instead of "show"
			
	}
	
    
	
}