let noteList= document.querySelector('#note-list')

//eventListeners
eventListener()


function eventListener() {
    document.querySelector('#form').addEventListener('submit' , newNote)

    document.querySelector('#note-list').addEventListener('click' , removebtn2)
    
    document.addEventListener('DOMContentLoaded' , loadedFormLS)
}
//function

function newNote(e) {
    //connect to textArea
    let note=document.querySelector('#note').value
    //dicconect form go to page "  #  "
    e.preventDefault()
    //create li form noteist
    let li =document.createElement('li')
    //create button element a for remove
    let removeBTN =document.createElement('a')
    removeBTN.classList='remove-note'
    removeBTN.appendChild(document.createTextNode('X'))
    // remove button child li
    li.appendChild(document.createTextNode(note))
    //li child note List
    noteList.appendChild(li)
    li.appendChild(removeBTN)
    //reset text area
    this.reset()
    //typing form add to LocalStorage
    addToLS(note)
}
// remove button X or text li
function removebtn2(e) {
    // if class  remove-note click in noteList 
    if(e.target.classList.contains('remove-note')){
        //connect to parent button removeBTN for remove li 100%
        e.target.parentElement.remove()}

        // remove form LocalStorage
        rFormLS(e.target.parentElement.textContent)
}
//
function addToLS(n) {
    let notes=getNoteLS()
    notes.push(n)
    localStorage.setItem('noteing' , JSON.stringify(notes))
}
//get text on function newNote and chenge to array
function getNoteLS() {
    let note;
    //create key name for values text
    let getFormLS=localStorage.getItem('noteing')
    //if  empty textarea 
    if (getFormLS === null) {
        note=[];
    } 
    //if  type and submit chenge to array
     else {
        note=JSON.parse(getFormLS)
}
 //go to up
return note
}
// loadedFormLS()
function loadedFormLS() {
    //create Variable function  Move to variable
    let noteContent =getNoteLS()
    //Navigation and show on noteList
    noteContent.forEach(elmt => {
        let li =document.createElement('li')
    
        let removeBTN =document.createElement('a')
        removeBTN.classList='remove-note'
        removeBTN.appendChild(document.createTextNode('X'))
        li.appendChild(document.createTextNode(elmt))
        noteList.appendChild(li)
        li.appendChild(removeBTN)
    
    });
}

function rFormLS(noteContent) {
    //create variable pasting index in 
 let notesSelect= noteContent.substring(0 , noteContent.length - 1)
 let notes=getNoteLS()
 
 notes.forEach(function(note,index) {
     if (note=== notesSelect) {
            
        notes.splice(index,1)

         }
 });
            //go to delete indx  How many to remove
 localStorage.setItem('noteing' , JSON.stringify(notes))
}