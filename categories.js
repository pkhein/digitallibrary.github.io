  const prevNext = document.querySelectorAll(".prevNext");
  numbers = document.querySelectorAll(".link"); 


let currentStep = 0;

// Function to update the button states
const updateBtn = () => {
 
  if (currentStep === 4) {
   
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
   
    prevNext[0].disabled = true;
  } else {
    
    prevNext[1].disabled = false;
   
    prevNext[0].disabled = false;
  }
};
let numIndex,number;

// Add event listeners to the number links
number.forEach((number,numIndex) => {

  number.addEventListener("click", (gg) => {
    gg.preventDefault();//default


   currentStep = numIndex;
    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");


    updateBtn(); // Update the button states
  });

});

// Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach((button) => {

  button.addEventListener("click", (gg) => {
    // Increment or decrement the current step based on the button clicked
    currentStep += gg.target.id === "next" ? 1 : -1;
    number.forEach((number, numIndex) => {
      // Toggle the "active" class on the number links based on the current step
      number.classList.toggle("active", numIndex === currentStep);
      updateBtn(); // Update the button states
    });
  });
});






