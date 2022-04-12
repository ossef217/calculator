// Get Buttons and Input Values
const userNumbers = document.querySelectorAll('button');
const output = document.querySelector('.output');

// Calculate() function using eval() method
function calculate(event) {
  const buttValue = event.target.value;
  if (buttValue === '=') {
  
    if (output.value !== '') 
    {
      output.value = eval(output.value);
    }
  } else if (buttValue === 'C') 
  {
    output.value = '';
  } else {
    output.value += buttValue;
  }
}

// Add an event listener to a specific element(button)
userNumbers.forEach(function(uNumber) {
    uNumber.addEventListener('click', calculate);
});
