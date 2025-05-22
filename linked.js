/**
 * @author Andrew Mills <andrew.mills56@studytafensw.edu.au>
 * 
 * @version 1.0
 * 
 * @description This function calculates the total cost for a customer based on the quantity of pizzas
 * they want to order. The function checks for valid input, calculates the total price based on predefined 
 * pizza prices, and then updates the page with the cost. 
 * 
 * The function performs the following tasks:
 * - Takes the user input (quantity of pizzas).
 * - Validates if the input is a valid quantity.
 * - Calculates the total price based on predefined pizza prices.
 * - Updates the UI with the total cost of the order.
 * 
 * @summary PizzasOnly Calculator - Calculates the cost of pizzas based on user input for quantity.
 * 
 * @module checkQuantity.js
 * 
 * @function checkQuantity
 * 
 * @returns {boolean} Returns false to prevent form submission (in the HTML form).
 */

function checkQuantity() {
    // Get the user input (The quantity of Pizzas)
    let userInput = parseInt(document.getElementById("quantity").value);
    // Clears the pizza total    
    let pizzaTotal = 0.00;
    // Sets the price of pizzas
    const pizzaPrice1 = 6.45;
    const pizzaPrice2 = 12.00;
    const pizzaPrice3 = 14.00;
    // Sets a pizza count for performing calculations
    let pizzaCount = userInput;
    
    // Basic validation on user input
    if (userInput < 1 || isNaN(userInput)) {
        document.getElementById("message").innerHTML = "<span style='color: red;'>Please enter a valid quantity</span>";
        document.getElementById("quantity").select();
        return false;
    }
    // For pizzas entered 1, 2 or 3
    else {
        switch (userInput) {
            case 1:
                pizzaTotal += pizzaPrice1;
                userInput -= 1;
                break;
            case 2:
                pizzaTotal += pizzaPrice2;
                userInput -= 2;
                break;
            case 3:
                pizzaTotal += pizzaPrice3;
                userInput -= 3;
                break;
            }
    } 
    // For 4 or more entered pizzas
    do {
        if (userInput >= 3) {
            pizzaTotal += pizzaPrice3; 
            userInput -= 3;
        } else if (userInput === 2) {
            pizzaTotal += pizzaPrice2;
            userInput -= 2;
        } else if (userInput === 1) {
            pizzaTotal += pizzaPrice1;
            userInput -= 1;
        }
    } while (userInput > 0);
    
    // Fixed to 2 decimal places
    pizzaTotal = pizzaTotal.toFixed(2);
    // Display costs to HTML file
    document.getElementById("message").innerHTML = `<span style='color: green;'>The cost of ${pizzaCount} pizza${(pizzaCount > 1 ? "s" : "")} is $ ${pizzaTotal}</span>`;
    return false;
}