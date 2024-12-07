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

function validate(){

    //fn & sn check that something has been submitted
    
    //check for tel > 0
    
    //check email for @ symbol
    
    //check date of birth day field for 0 < day > 32

    // check date of birth month field for 0 < day > 13


    
    let valid = true; //our flag
    
    let msge = "incomplete form, please input the following details:<br>";
    
    let thx = "";
    
    if(document.getElementById("fn").value == ""){
    
        msge+= "First name<br>";
        
        valid = false;
    
    }
    
    if(document.getElementById("sn").value == ""){
    
        msge+= "Surname<br>";
        valid = false;
        
    }
    
    if(document.getElementById("tel").value == 0){
    
        msge+= "Telephone number<br>";
        valid = false;
        
    }
    
    if(document.getElementById("email").value == ""){
    
        msge+= "Email<br>";
        valid = false;
    
    } else if(document.getElementById("email").value != ""){
    
    
        inputE = document.getElementById("email").value;
        let symbol = inputE.indexOf("@");
        
        if(symbol <1){
            
            valid = false;
            msge+= "Valid email<br>";
            
        }
    
    }

    
    if(document.getElementById("DOB").value == ""){
    
        msge+= "Please insert your date of birth";
        valid = false;
        
    }
    
    if(valid){
    
        thx+= "Thank you " + document.getElementById("fn").value + " " + document.getElementById("sn").value + " for filling out the form! We will be in touch soon!";
        
        valid = true;
        
        document.getElementById("thx").innerHTML = thx;
        
    } else{

    document.getElementById("details").innerHTML = msge; //return the flag and show the msge
    
    return valid;
    
    }

}

function randImg(){

    const image = ["<img alt='picture of a white dog laying on a wooden deck' src='./images/dog1.jpg'>", "<img alt='picture of a corgi in a grassy field looking at the camera' src='./images/dog2.jpg'>", "<img alt='lineart of a dog looking off into the distance' src='./images/dog3.png'>"]

    arrayChoice = Math.floor(Math.random()*image.length);



    document.getElementById("imageHere").innerHTML= ""+image[arrayChoice];


}