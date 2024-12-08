function displayRandomFact() {
    const targetList = [
  "Over 800 million people around the world suffer from hunger.",
  "One in nine people worldwide go to bed hungry every day.",
  "Hunger is the number one health risk in the world, greater than AIDS, malaria, and tuberculosis combined.",
  "More than 3 million children under five die from malnutrition each year.",
  "Despite the increase in global food production, hunger and food insecurity still persist.",
  "Sub-Saharan Africa has the highest percentage of hungry people, with over 20% of the population affected.",
  "The world produces enough food to feed everyone, yet millions still suffer from hunger due to poverty, inequality, and conflict.",
  "Hunger contributes to the deaths of around 1 in 9 people globally.",
  "The COVID-19 pandemic has exacerbated food insecurity, pushing millions more people into hunger.",
  "Investing in agriculture, improving nutrition, and reducing food waste are critical to ending hunger."
];


    prevInteger = integer;
    while (prevInteger == integer) {
        integer = Math.floor(Math.random() * targetList.length); // Generates a random number between 1 and the amount of target in array
    }
    let textToBeInserted = targetList[integer];
    document.getElementById("randomfact").innerHTML = textToBeInserted;
}

// Variables
var prevInteger;
var integer;


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