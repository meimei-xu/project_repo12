// Opening & closing sidebar functions

// Opens sidebar by setting its wideth to 60% of the screen
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("hamburger").style.display = "none";
}

// Closes/hides sidebar by setting its width to 0
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("hamburger").style.display = "block";
}

//User profile pop up function-------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//------------------------------------------

// Changing sign on accordion item header
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");

    // Opening and closing the accordion
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = "0";
    }
  });
});
