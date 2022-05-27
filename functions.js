'use strict';

// 1. isHometown
function isHometown(town) {
    return town == "San Francisco"
}


// Check if string (town) equals "San Francisco", return true if so

// 2. getFullName
function getFullName(firstName,lastName){
    return `${firstName} ${lastName}`
}

// Define your function here

// 3. calculateTotal
function calculateTotal(base_price, state, tax=0.05) {
    fee = 0
    subtotal = base_price * (1 + tax)
    
    if (state == 'CA') {
        fee = 0.03 * subtotal;
      } else if (state == 'PA') {
        fee = 2;
      } else if (state == 'MA') {
            if (base_price <= 100) {
                fee = 1
           
            } else {fee = 3
            }
      }

    return subtotal + fee
}


   
// Return the total price of an item, figuring in state taxes and fees.
