// Opening & closing sidebar functions

// Open sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
}

// Close/hide sidebar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

//accordion function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}