// Select the elements
const menuToggle = document.getElementById('menuToggle');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');

// Function to open the navbar
function openNav() {
    sideNav.classList.add('active'); // Add the active class
    overlay.classList.add('active'); // Show the overlay
}

// Function to close the navbar
function closeNav() {
    sideNav.classList.remove('active'); // Remove the active class
    overlay.classList.remove('active'); // Hide the overlay
}

// Event listeners
menuToggle.addEventListener('click', openNav); // Open nav when menuToggle is clicked
overlay.addEventListener('click', closeNav);   // Close nav when overlay is clicked

function expanded() {
    let expand = document.getElementById("graphic").style;
    if (expand.display === "none") {
        expand.display = "block";
    } else {
        expand.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const ul = document.querySelector('.content ul');
    const items = Array.from(ul.children);
    ul.innerHTML = '';
    items.reverse().forEach(item => {
        ul.appendChild(item);
    });
});
 // Logic for fotter
 function year() {
    // Create a new Date object
    let currentDate = new Date();
  
    // Get the current year
    let currentYear = currentDate.getFullYear();
  
    // Display the current year
    console.log("The current year is: " + currentYear);
  
    // Update content of elements with class name "credit"
    let elements = document.getElementsByClassName("credit");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "&copy; Copyright Microtasker " + currentYear;
    }
  }
  
  // Call the function once the document is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    year(); // Call the function
  });