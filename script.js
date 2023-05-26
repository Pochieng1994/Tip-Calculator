/*Build a tip calculator.

Math Hint:
tip amount = Bill amount x (tip percentage / 100)

You should have a form where a user is able to input the cost of the meal.
-The form should also let the user choose the percentage tip they want to give.
-When they submit the form, show them the total with tip added.
-Display the total tip amount as well so they know how much they're tipping.
-Send me the project for review and get started on the next project.
*/

let myForm = document.querySelector('#myForm');
let costOfMeal = document.querySelector('#costOfMeal');
let tipPercentage = document.querySelector('#tip');
let submit = document.querySelector('#submit');
let totalAndTipAdded = document.querySelector('#totalAndTipAdded');
let totalTipAmount = document.querySelector('#totalTipAmount');

submit.addEventListener('click', function() {
  input1 = Number(costOfMeal.value);
  input2 = Number(tipPercentage.value);

  if(tipAmount = input1 * (input2 / 100)) { 
    totalAndTipAdded.textContent = `Cost Of Meal With Tip Added: $${input1 + tipAmount}`;
    totalTipAmount.textContent = `Total Tip Amount: $${tipAmount}`;
  }
})

myForm.addEventListener('click', function(e) {
  e.preventDefault();
})

