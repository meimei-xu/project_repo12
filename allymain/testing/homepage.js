// Opening & closing sidebar functions

// Open sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("hamburger").hidden = true;
  console.log(document.getElementById("hamburger").style.display);
  document.getElementById("hamburger").style.display = "none";
}

// Close/hide sidebar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("hamburger").style.display = "block";
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
