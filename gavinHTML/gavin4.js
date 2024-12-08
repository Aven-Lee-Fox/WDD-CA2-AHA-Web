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