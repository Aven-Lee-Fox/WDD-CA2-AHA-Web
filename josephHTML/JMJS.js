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

function validate(){ //the function for the form, checks each field for a valid input then validates

    //fn & sn check that something has been submitted
    
    //check for tel > 0
    
    //check email for @ symbol
    
    //checks to see the date field is not YYYY/MM/DD


    
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

function randImg(){ //the function for the randomisation, sets out an array with HTML tags to show images, picks a random number then checks it against the array and then puts it into the div with the id "imageHere"

    const image = ["<img alt='picture of a white dog laying on a wooden deck' src='./images/dog1.jpg'>", "<img alt='picture of a corgi in a grassy field looking at the camera' src='./images/dog2.jpg'>", "<img alt='lineart of a dog looking off into the distance' src='./images/dog3.png'>"]

    arrayChoice = Math.floor(Math.random()*image.length);



    document.getElementById("imageHere").innerHTML= ""+image[arrayChoice];


}

// Code from w3Schools
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 1486) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + "px"; 
      }
    }
  }