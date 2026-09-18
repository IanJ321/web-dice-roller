/* 
    The code in this file came from the ChatGPT prompt we used to complete the assignment in class. 
    The values in each class have been modified from the original to make the project more unique.
    Modifications I made include:
    - Changing the "die1" and "die2" classes to "firstRoll" and "secondRoll"
        - Even though they are the only classes in this project, I think they are more descriptive
          than what was given in the prompt output
*/

function rollDice () {

    const firstRoll = Math.floor(Math.random() * 6) + 1;
    const secondRoll = Math.floor(Math.random() * 6) + 1;

    const total = firstRoll + secondRoll;

    document.getElementById("firstRoll").value = firstRoll;
    document.getElementById("secondRoll").value = secondRoll;
    document.getElementById("total").value = total;

    document.getElementById("rollButton").focus();
    
}
