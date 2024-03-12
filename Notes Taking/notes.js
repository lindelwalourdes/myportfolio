const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
    // Create a new note container
    let noteContainer = document.createElement("div");
    noteContainer.className = "input-box";
    
    // Create a new paragraph for text input
    let inputBox = document.createElement("p");
    inputBox.setAttribute("contenteditable", "true");

    // Create a delete button
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "images/delete.png";
    deleteBtn.alt = "Delete";
    deleteBtn.addEventListener("click", () => {
        // Remove the entire note when the delete button is clicked
        notesContainer.removeChild(noteContainer);
    });

    // Append elements to the note container
    noteContainer.appendChild(inputBox);
    noteContainer.appendChild(deleteBtn);

    // Append the note container to the notes container
    notesContainer.appendChild(noteContainer);
});