const noteListDiv = document.querySelector(".note-list");
let noteID = 1;
function Note(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

// all eventlisteners
function eventListeners() {
  document.addEventListener("DOMContentLoaded", displayNotes);

  // Add an eventlistner that when content is loaded, trees will display

  document.getElementById("add-note-btn").addEventListener("click", addNewNote);
  
  noteListDiv.addEventListener("click", deleteNote);
  
  document.getElementById("delete-all-btn").addEventListener("click", deleteAllNotes);

  // noteListDiv.addEventListener("click", completeNote);
}

eventListeners();

// get items form storage
function getDataFromStorage() {
  return localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
}

// add a new note in the list
function addNewNote() {
  const noteTitle = document.getElementById("note-title"),
    noteContent = document.getElementById("note-content");
  if (validateInput(noteTitle, noteContent)) {
    let notes = getDataFromStorage();
    let noteItem = new Note(noteID, noteTitle.value, noteContent.value);
    noteID++;
    notes.push(noteItem);
    createNote(noteItem);
    // saving in the local storage
    localStorage.setItem("notes", JSON.stringify(notes));
    noteTitle.value = "";
    noteContent.value = "";
  }
}

// input validation
function validateInput(title, content) {
  if (title.value !== "" && content.value !== "") {
    return true;
  } else {
    if (title.value === "") title.classList.add("warning");
    if (content.value === "") content.classList.add("warning");
  }
  setTimeout(() => {
    title.classList.remove("warning");
    content.classList.remove("warning");
  }, 1500);
}

// create a new note div
function createNote(noteItem) {
  const div = document.createElement("div");
  div.classList.add("note-item");
  div.setAttribute("data-id", noteItem.id);
  div.innerHTML = `
        <h3>${noteItem.title}</h3>
        <p>${noteItem.content}</p>
        <button type = "button" class = "btn1 delete-note-btn">
        <span><i class = "fa fa-trash"></i></span>
        Remove
        </button>
        <a href="javascript:;" class="addTree btn2" user-id=${user_id}>
          <span><i class="fa fa-check-square"></i></span>
         Complete
        </a>
    `;
  noteListDiv.appendChild(div);
}

// display all the notes form the local storage
function displayNotes() {
  let notes = getDataFromStorage();
  if (notes.length > 0) {
    noteID = notes[notes.length - 1].id;
    noteID++;
  } else {
    noteID = 1;
  }
  notes.forEach((item) => {
    createNote(item);
  });
}

// delete a note
function deleteNote(e) {
  if (e.target.classList.contains("delete-note-btn")) {
    //console.log(e.target.parentElement);
    e.target.parentElement.remove(); // removing from DOM
    let divID = e.target.parentElement.dataset.id;
    let notes = getDataFromStorage();
    let newNotesList = notes.filter((item) => {
      return item.id !== parseInt(divID);
    });
    localStorage.setItem("notes", JSON.stringify(newNotesList));
  }
}

// // complete a note
// function completeNote(e) {
//   if (e.target.classList.contains("checkbox-note-btn")) {
//     var doComplete = confirm("Are you sure you want to complete goals?");
//     if (doComplete == true) {
      
//       // Deletes note 
//       e.target.parentElement.remove(); // removing from DOM
//       let divID = e.target.parentElement.dataset.id;
//       let notes = getDataFromStorage();
//       let newNotesList = notes.filter((item) => {
//         return item.id !== parseInt(divID);
//       });
//       localStorage.setItem("notes", JSON.stringify(newNotesList));

//       // Plants a tree 
//       plantTree();

//     }
//   }
// }

// Plant a tree function
function plantTrees() {

  let plantTree = parseInt(trees);
  console.log(plantTree);

  for(var i = 0; i < plantTree; i++) {

    let img;
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");

    img1.setAttribute("class", "tree");
    img1.src = "/media/images/tree1.png";

    img2.setAttribute("class", "tree");
    img2.src = "/media/images/tree2.png";

    img3.setAttribute("class", "tree");
    img3.src = "/media/images/tree3.png";

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let randomNum = getRandomInt(3);
    if (randomNum == 0) {
      img = img1;
    } else if (randomNum == 1) {
      img = img2;
    } else {
      img = img3;
    }

    let background = document.getElementById("background-mountain");
    background.appendChild(img);
  }
}

// delete all notes
function deleteAllNotes() {
  localStorage.removeItem("notes");
  let noteList = document.querySelectorAll(".note-item");
  if (noteList.length > 0) {
    noteList.forEach((item) => {
      noteListDiv.removeChild(item);
    });
  }
  noteID = 1; // resetting noteID to 1
}
