// Opening & closing sidebar functions

// Opens sidebar by setting its wideth to 60% of the screen
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
  }
  
// Closes/hides sidebar by setting its width to 0 
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  
// Showing and hiding the accordion panel
var acc = document.getElementsByClassName("accordion");
var i;
  
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
    // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
      this.classList.toggle("active");

      // Toggle between hiding and showing the active panel 
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
}