
  // change dynaimuc img
  const images = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596725858508-70543890c732?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const backgroundDiv = document.getElementById('background');
    
    // Fade out the current image
    backgroundDiv.style.opacity = 0;

    setTimeout(() => {
        // Update the background image after fade out
        backgroundDiv.style.backgroundImage = `url(${images[currentImageIndex]})`;

        // Allow a slight delay before fading in
        setTimeout(() => {
            // Fade in the new image
            backgroundDiv.style.opacity = 1;
        }, 50); // Slight delay to avoid white blink

        // Move to the next image, looping back to the first
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 1000); // Timeout matches the transition duration in CSS
}

// Change image every 8 seconds
setInterval(changeBackgroundImage, 8000);

// function for open responsive menu on mobile

function mobile() {
    let a = document.getElementById("navm")
    if (a.style.display = "none") {
      a.style.display = "flex"
    }
  
  }
  // function for close responsive menu
  function closer() {
    document.getElementById("navm").style.display = "none"
    document.getElementById("navm").style.animation = `nav 1s ease 0s 1 normal forwards;`
  
  }
  // form function
  function step2() {
    location.href = "Forms/step2.html"
  }
  
  function step1() {
    alert("done")
  }
  // portfolio
  function showbtn(imageElement) {
    let showButton = document.getElementById("show");
    showButton.style.display = "block";
  }
  function hidebtn() {
    let showButton = document.getElementById("show");
    showButton.style.display = "block";
  }
  // open a menu for other platforms
  function fiver() {
    let fiver = document.getElementById("others")
    fiver.style.display = "block"
  }
  // /portfolio page
  function web() {
    document.getElementById("web").style.display = "block"
    document.getElementById("videos").style.display = "none"
    document.getElementById("white").style.display = "none"
    document.getElementById("graphic").style.display = "none"
    document.getElementById("c1").style.color = "#40E15D"
    document.getElementById("c2").style.color = "black"
    document.getElementById("c3").style.color = "black"
    document.getElementById("c4").style.color = "black"
  }
  // video
  function video() {
    document.getElementById("web").style.display = "none"
    document.getElementById("videos").style.display = "block"
    document.getElementById("white").style.display = "none"
    document.getElementById("graphic").style.display = "none"
    document.getElementById("c2").style.color = "#40E15D"
    document.getElementById("c1").style.color = "black"
    document.getElementById("c3").style.color = "black"
    document.getElementById("c4").style.color = "black"
  }
  // graphic
  function graphic() {
    document.getElementById("web").style.display = "none"
    document.getElementById("videos").style.display = "none"
    document.getElementById("white").style.display = "none"
    document.getElementById("graphic").style.display = "block"
    document.getElementById("c3").style.color = "#40E15D"
    document.getElementById("c2").style.color = "black"
    document.getElementById("c1").style.color = "black"
    document.getElementById("c4").style.color = "black"
  }
  //white
  function white() {
    document.getElementById("web").style.display = "none"
    document.getElementById("videos").style.display = "none"
    document.getElementById("white").style.display = "block"
    document.getElementById("graphic").style.display = "none"
    document.getElementById("c4").style.color = "#40E15D"
    document.getElementById("c2").style.color = "black"
    document.getElementById("c3").style.color = "black"
    document.getElementById("c1").style.color = "black"
  }
  // pricing page js
  function changeInputValue() {
    // Get the input element by its id
    const packageInput = document.getElementById('package-input');
  
    // Set a new value for the input field
    packageInput.value = 'Hello-world';
  }
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
  // pop upp
  // scripts.js
 // scripts.js

    document.addEventListener('DOMContentLoaded', function() {
      const popup = document.getElementById('newsletter-popup');
      const closePopup = document.getElementById('close-popup');
      let popupTimer;
    
      // Function to show the pop-up
      function showPopup() {
      popup.style.display = 'flex'; // Display the pop-up
      }
    
      // Function to set the timer for showing the pop-up
      function setPopupTimer() {
          popupTimer = setTimeout(showPopup, 10000); // 10,000 milliseconds = 10 seconds
      }
    
      // Set the timer when the page loads
      setPopupTimer();
    
      // Close the pop-up when the close button is clicked
      closePopup.addEventListener('click', function() {
          popup.style.display = 'none'; // Hide the pop-up
          clearTimeout(popupTimer); // Clear the timer if the user closes the pop-up
      });
    
      // Handle form submission
      document.getElementById('subscribe-form').addEventListener('submit', function(event) {
          event.preventDefault();
          const email = document.getElementById('email').value;
          // Handle the email subscription here (e.g., send to server or API)
       
          popup.style.display = 'none'; // Hide the pop-up after successful subscription
          clearTimeout(popupTimer); // Clear the timer after successful subscription
      });
    });
// reveal animation
// Select all elements with the 'reveal' class
const reveals = document.querySelectorAll('.reveal');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Attach the observer to each reveal element
reveals.forEach(reveal => {
    observer.observe(reveal);
});
// close popup
function hideElementAfter5Seconds(elementId) {
  setTimeout(function() {
      document.getElementById(elementId).style.display = 'none';
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Example usage:
hideElementAfter5Seconds('subscribe-popup2');
function closed(){
document.getElementById('subscribe-popup2').style.display="none"
}
