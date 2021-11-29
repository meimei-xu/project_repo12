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
// <timer---------------------------------------------------------------------------
// the timer function
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("w_min");
var ws = document.getElementById("w_sec");

var bm = document.getElementById("b_min");
var bs = document.getElementById("b_sec");

//store a reference to a timer variable
var startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", function () {
  wm.innerText = 25;
  ws.innerText = "00";

  bm.innerText = 5;
  bs.innerText = "00";

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

//Start Timer Function
function timer() {
  //Work Timer Countdown
  if (ws.innerText != 0) {
    ws.innerText--;
    if (ws.innerText < 10) ws.innerText = "0" + ws.innerText;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
    if (wm.innerText < 10) wm.innerText = "0" + wm.innerText;
  }

  //Break Timer Countdown
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
      if (bs.innerText < 10) bs.innerText = "0" + bs.innerText;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
      if (bm.innerText < 10) bm.innerText = "0" + bm.innerText;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText++;
  }
}

// //play audio when timer is over function
// if (wm.innerText == 0 && ws.innerText == 0) {
//   document.getElementById("finw").play();
// }
// if (bm.innerText == 00 && bs.innerText == 00) {
//   document.getElementById("finb").play();
// }

//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}
// <music---------------------------------------------------------------------------
// Playing music and changing the icon

// Assigning variables to the songs
var songOne = document.getElementById("songOne");
var songTwo = document.getElementById("songTwo");
var songThree = document.getElementById("songThree");
var songFour = document.getElementById("songFour");

// Assigning variables to the music icons to toggle between play and pause
var musicIconOne = document.getElementById("musicIconOne");
var musicIconTwo = document.getElementById("musicIconTwo");
var musicIconThree = document.getElementById("musicIconThree");
var musicIconFour = document.getElementById("musicIconFour");

// Playing and pausing song one
musicIconOne.onclick = function () {
  if (songOne.paused) {
    // Song one plays
    songOne.play();

    // All other songs pause
    songTwo.pause();
    songThree.pause();
    songFour.pause();

    // Song one icon changes to pause
    musicIconOne.src = "/images/pausebutton.png";

    // All other song icons change to play
    musicIconTwo.src = "/images/playbutton.png";
    musicIconThree.src = "/images/playbutton.png";
    musicIconFour.src = "/images/playbutton.png";
  } else {
    songOne.pause();
    musicIconOne.src = "/images/playbutton.png";
  }
};

// Playing and pausing song two
musicIconTwo.onclick = function () {
  if (songTwo.paused) {
    // Song two plays
    songTwo.play();

    // All other songs pause
    songOne.pause();
    songThree.pause();
    songFour.pause();

    // Song two icon changes to pause
    musicIconTwo.src = "/images/pausebutton.png";

    // All other song icons change to play
    musicIconOne.src = "/images/playbutton.png";
    musicIconThree.src = "/images/playbutton.png";
    musicIconFour.src = "/images/playbutton.png";
  } else {
    songTwo.pause();
    musicIconTwo.src = "/images/playbutton.png";
  }
};

// Playing and pausing song three
musicIconThree.onclick = function () {
  if (songThree.paused) {
    // Song three plays
    songThree.play();

    // All other songs pause
    songOne.pause();
    songTwo.pause();
    songFour.pause();

    // Song three icon changes to pause
    musicIconThree.src = "/images/pausebutton.png";

    // All other song icons change to play
    musicIconOne.src = "/images/playbutton.png";
    musicIconTwo.src = "/images/playbutton.png";
    musicIconFour.src = "/images/playbutton.png";
  } else {
    songThree.pause();
    musicIconThree.src = "/images/playbutton.png";
  }
};

// Playing and pausing song four
musicIconFour.onclick = function () {
  if (songFour.paused) {
    // Song four plays
    songFour.play();

    // All other songs pause
    songOne.pause();
    songTwo.pause();
    songThree.pause();

    // Song four icon changes to pause
    musicIconFour.src = "/images/pausebutton.png";

    // All other song icons change to play
    musicIconOne.src = "/images/playbutton.png";
    musicIconTwo.src = "/images/playbutton.png";
    musicIconThree.src = "/images/playbutton.png";
  } else {
    songFour.pause();
    musicIconFour.src = "/images/playbutton.png";
  }
};
