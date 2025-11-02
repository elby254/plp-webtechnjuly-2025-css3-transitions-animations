// Part 2: JavaScript Functions

// Global variable
let shape = "rectangle";

// Function with parameters and return value
function calculateArea(width, height) {
  const area = width * height; // Local variable
  return area;
}

document.getElementById("calculateBtn").addEventListener("click", () => {
  const area = calculateArea(10, 5);
  document.getElementById("result").textContent =
    `The area of the ${shape} is ${area} square units.`;
});


// Part 3: Combining CSS + JS

const animatedBox = document.getElementById("animatedBox");
const animateBoxBtn = document.getElementById("animateBoxBtn");

// Function to toggle animation class
function toggleAnimation() {
  animatedBox.classList.toggle("animate");
}

animateBoxBtn.addEventListener("click", toggleAnimation);

// Bonus: using return to confirm state
function isBoxAnimated() {
  return animatedBox.classList.contains("animate");
}

animateBoxBtn.addEventListener("click", () => {
  console.log("Box animated?", isBoxAnimated());
});
