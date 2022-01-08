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

//play audio when timer is over function
if (wm.innerText == 0 && ws.innerText == 0) {
  document.getElementById("finw").play();
}
if (bm.innerText == 00 && bs.innerText == 00) {
  document.getElementById("finb").play();
}

//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}
