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

        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = "0";
        }
    });
});

// Playing music and changing the icon
var songOne = document.getElementById("songOne");
var songTwo = document.getElementById("songTwo");

var musicIcon = document.getElementById("musicIcon");

musicIcon.onclick = function() {
    if (songOne.paused) {
        songOne.play();
        musicIcon.src = '/images/pausebutton.png';
    } else {
        songOne.pause();
        musicIcon.src = '/images/playbutton.png';
    }
}

