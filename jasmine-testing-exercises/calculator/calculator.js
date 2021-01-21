window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYear = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");
  loanAmount.value = 40000;
  loanYear.value = 30;
  loanRate.value = 3;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let amount = values.amount;
  let months = values.years*12;
  let rate = values.rate/1200;
  if(checkNumber(values)){
    let monthlyPayment = (amount*rate)/(1-Math.pow(1+rate,-months));
    return monthlyPayment.toFixed(2);
  }
  else{return false}
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthHTML= document.getElementById("monthly-payment");
  if(monthly){
    console.log(monthly);
    monthHTML.innerText = monthly;
  }
  else{
    monthHTML.innerText = '';
    setTimeout(function(){alert("Please use numbers!")}, 200);
    

  }
  
}
function checkNumber(values){
  let check =true;
  for(let key of Object.keys(values)){
  
    if(isNaN(values[key])){
    check =false
    }
  }
  return check;
}
