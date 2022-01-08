// <-------------------SIDEBAR FUNCTION------------------>

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

// < ---------ACCORDION FUNCTION---------------->

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

//When the user clicks on signout btn, alert pops up
function confirmSignOut() {
  var confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout == true) {
    redirectfunction();
  }
}

function redirectfunction() {
  window.location = "/allymain/userlog/login.html";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// <----------------------TIMER--------------------------------->

// TIMER FUNCTION

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("w_min");
var ws = document.getElementById("w_sec");

var bm = document.getElementById("b_min");
var bs = document.getElementById("b_sec");

var workRingtone = document.getElementById("finw");
var breakRingtone = document.getElementById("finb");

var timerMess = document.getElementById("timerMess");

//store a reference to a timer variable
var startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);

    // Change timer message
    timerMess.innerText = "Work Time";
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", function () {
  wm.innerText = 25;
  ws.innerText = "00";

  bm.innerText = "05";
  bs.innerText = "00";

  // Change timer message
  timerMess.innerText = "Start Timer";

  // Pauses ringtones when reset button is clicked
  workRingtone.pause();
  breakRingtone.pause();

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;

  // Pauses ringtones when pause button is clicked
  workRingtone.pause();
  breakRingtone.pause();
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
    // Change timer message
    timerMess.innerText = "Break Time";

    if (bs.innerText == 15 && bm.innerText == 0) {
      workRingtone.play();
    }

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
    // Break ringtone goes off
    breakRingtone.play();

    wm.innerText = "00";
    ws.innerText = "10";

    bm.innerText = "00";
    bs.innerText = "15";

    // Change timer message
    timerMess.innerText = "Work Time";

    document.getElementById("counter").innerText++;
  }
}

// Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}

// <----------------------MUSIC----------------------------------->

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

// Event listeners
musicIconOne.addEventListener("click", playSongOne);
musicIconTwo.addEventListener("click", playSongTwo);
musicIconThree.addEventListener("click", playSongThree);
musicIconFour.addEventListener("click", playSongFour);

// Play songs functions

function playSongOne() {
  if (songOne.paused) {

    // Song one plays
    songOne.play();

    // Song one icon changes to pause
    musicIconOne.src = "/images/pausebutton.png";

    // All other songs pause
    pauseSongTwo();
    pauseSongThree();
    pauseSongFour();

  } else {
    pauseSongOne();
  }
};

function playSongTwo() {
  if (songTwo.paused) {

    // Song two plays
    songTwo.play();

    // Song two icon changes to pause
    musicIconTwo.src = "/images/pausebutton.png";

    // All other songs pause
    pauseSongOne();
    pauseSongThree();
    pauseSongFour();

  } else {
    pauseSongTwo();
  }
};

function playSongThree() {
  if (songThree.paused) {

    // Song three plays
    songThree.play();

    // Song three icon changes to pause
    musicIconThree.src = "/images/pausebutton.png";

    // All other songs pause
    pauseSongOne();
    pauseSongTwo();
    pauseSongFour();

  } else {
    pauseSongThree();
  }
};

function playSongFour() {
  if (songFour.paused) {

    // Song four plays
    songFour.play();

    // Song four icon changes to pause
    musicIconFour.src = "/images/pausebutton.png";

    // All other songs pause
    pauseSongOne();
    pauseSongTwo();
    pauseSongThree();

  } else {
    pauseSongFour();
  }
};

// Pause songs functions

function pauseSongOne() {
  songOne.pause();
  musicIconOne.src = "/images/playbutton.png";
}

function pauseSongTwo() {
  songTwo.pause();
  musicIconTwo.src = "/images/playbutton.png";
}

function pauseSongThree() {
  songThree.pause();
  musicIconThree.src = "/images/playbutton.png";
}

function pauseSongFour() {
  songFour.pause();
  musicIconFour.src = "/images/playbutton.png";
}
