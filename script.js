const button = document.querySelector(".create-btn");
const notesContainer = document.querySelector(".notes-container");
const notes = document.querySelectorAll(".note");


var options = ["study","Business", "Home", "Entertainment"];
var color = ["#FFBF00", "#6495ED", "#9FE2BF" ,"#CCCCFF", "#800080",
            "#800000", "#008000", "#008080","#000080"];

showData()

button.addEventListener("click", ()=>{
    var note= document.createElement("div");
    note.className = "note";

    let navbar = document.createElement("div");
    navbar.className = "note-navbar"

    let categories = document.createElement("select")
    categories.className = "categories"
    options.forEach(opt => {
        let option = document.createElement("option");
        var bgcolor = color[Math.floor(Math.random() * color.length)]

        option.className = "option"
        option.value = opt
        option.innerHTML = opt;
        categories.style.backgroundColor = bgcolor;
        categories.appendChild(option)
    });

    let right = document.createElement("div");
    right.className = "right";

    let checkbox = document.createElement("input");
    checkbox.className = "check-box";
    checkbox.type = "checkbox"

    let iconOne = document.createElement("i")
    iconOne.className = "fa-solid fa-pen-to-square"
    let iconTwo = document.createElement("i")
    iconTwo.className = "fa-solid fa-trash-can"
    iconTwo.id = "delete"

    right.appendChild(checkbox)
    right.appendChild(iconOne)
    right.appendChild(iconTwo)

    navbar.appendChild(categories);
    navbar.appendChild(right);

    let contents = document.createElement("div");
    contents.className = "contents";

    let title = document.createElement("h2");
    title.className = "title";
    title.contentEditable = "true"
    title.innerHTML = "Enter your Title):"

    let description = document.createElement("p");
    description.className = "description";
    description.contentEditable = "true";
    description.innerHTML = "Enter Your Notes Here...";

    contents.appendChild(title);
    contents.appendChild(description);

    let date =  document.createElement("p");
    date.className = "date";
    date.innerHTML = getCurrentDate();

    note.appendChild(navbar);
    note.appendChild(contents);
    note.appendChild(date);

    notesContainer.appendChild(note)
})

notesContainer.addEventListener("click", function(event){
    if(event.target.id === "delete"){
        event.target.parentElement.parentElement.parentElement.remove()
        updateData()
    }
})

document.body.addEventListener("click", ()=>{
    updateData()
})

// Create function for store data in Local Storage
function updateData(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}

// Create function for show data stored in Local Storage
function showData(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}

// Create function for GET current Date
function getCurrentDate(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    return `${year}-${month}-${day}`
}



