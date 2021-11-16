// Opening & closing sidebar functions

// Opens sidebar by setting its wideth to 60% of the screen
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
}
  
// Closes/hides sidebar by setting its width to 0 
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// Changing sign on accordion item header
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");

        // Opening and closing the accordion
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        // testing
        const musicItemBody = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";

            // testing
            musicItemBody.style.maxHeight = musicItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = "0";

            // testing
            musicItemBody.style.maxHeight = "0";
        }
    });
});