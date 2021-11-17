// Opening & closing sidebar functions

// Opens sidebar by setting its wideth to 60% of the screen
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("menuHamb").style.display = "none";
}

// Closes/hides sidebar by setting its width to 0
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("menuHamb").style.display = "block";
}

// Switches the accordion header to "active" and back
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

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

// Playing music and changing the icon

// Assigning variables to the songs
var songOne = document.getElementById("songOne");
var songTwo = document.getElementById("songTwo");
var songThree = document.getElementById("songThree");
var songFour = document.getElementById("songFour");

// Assigning variables to the music icons to toggle between play and pause
var musicIconOne = document.getElementById("musicIconOne");
var musicIconTwo = document.getElementById("musicIconTwo")
var musicIconThree = document.getElementById("musicIconThree")
var musicIconFour = document.getElementById("musicIconFour")

// Playing and pausing song one
musicIconOne.onclick = function() {
    if (songOne.paused) {
        // Song one plays
        songOne.play();

        // All other songs pause
        songTwo.pause();
        songThree.pause();
        songFour.pause();

        // Song one icon changes to pause
        musicIconOne.src = '/images/pausebutton.png';

        // All other song icons change to play
        musicIconTwo.src = '/images/playbutton.png';
        musicIconThree.src = '/images/playbutton.png';
        musicIconFour.src = '/images/playbutton.png';
    } else {
        songOne.pause();
        musicIconOne.src = '/images/playbutton.png';
    }
}

// Playing and pausing song two
musicIconTwo.onclick = function() {
    if (songTwo.paused) {
        // Song two plays
        songTwo.play();

        // All other songs pause
        songOne.pause();
        songThree.pause();
        songFour.pause();

        // Song two icon changes to pause
        musicIconTwo.src = '/images/pausebutton.png';

        // All other song icons change to play
        musicIconOne.src = '/images/playbutton.png';
        musicIconThree.src = '/images/playbutton.png';
        musicIconFour.src = '/images/playbutton.png';
    } else {
        songTwo.pause();
        musicIconTwo.src = '/images/playbutton.png';
    }
}

// Playing and pausing song three
musicIconThree.onclick = function() {
    if (songThree.paused) {
        // Song three plays
        songThree.play();

        // All other songs pause
        songOne.pause();
        songTwo.pause();
        songFour.pause();

        // Song three icon changes to pause
        musicIconThree.src = '/images/pausebutton.png';

        // All other song icons change to play
        musicIconOne.src = '/images/playbutton.png';
        musicIconTwo.src = '/images/playbutton.png';
        musicIconFour.src = '/images/playbutton.png';
    } else {
        songThree.pause();
        musicIconThree.src = '/images/playbutton.png';
    }
}

// Playing and pausing song four
musicIconFour.onclick = function() {
    if (songFour.paused) {
        // Song four plays
        songFour.play();

        // All other songs pause
        songOne.pause();
        songTwo.pause();
        songThree.pause();

        // Song four icon changes to pause
        musicIconFour.src = '/images/pausebutton.png';

        // All other song icons change to play
        musicIconOne.src = '/images/playbutton.png';
        musicIconTwo.src = '/images/playbutton.png';
        musicIconThree.src = '/images/playbutton.png';
    } else {
        songFour.pause();
        musicIconFour.src = '/images/playbutton.png';
    }
}
