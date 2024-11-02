// JavaScript to add a "scrolled" class to navbar on scroll and to change background color on hover
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // JavaScript to change background color based on hovered tab
  const navLinks = document.querySelectorAll(".navbar a");
  
  // Handle hover to change background color
  navLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
      document.body.style.backgroundColor = link.getAttribute("data-color");
    });
    
    link.addEventListener("mouseout", function() {
      document.body.style.backgroundColor = "#f4f4f9"; // Reset to default color
    });
  });
  
  // Smooth scroll to sections and update background
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default jump-to behavior
      const targetId = link.getAttribute("href").substring(1); // Get section ID
      const targetSection = document.getElementById(targetId);
  
      // Scroll smoothly to the section
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Scroll-based background color change
  const sections = document.querySelectorAll("section");
  
  window.addEventListener("scroll", () => {
    let currentColor = "#f4f4f9"; // Default background color
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - window.innerHeight / 2;
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        const link = document.querySelector(`.navbar a[href="#${section.id}"]`);
        currentColor = link.getAttribute("data-color");
      }
    });
  
    // Apply the background color based on the current section in view
    document.body.style.backgroundColor = currentColor;
  });
  