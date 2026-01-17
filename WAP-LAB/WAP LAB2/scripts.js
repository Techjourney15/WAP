const FormInput=document.getElementById('container_add_note')
const NoteInput=document.getElementById('txt_add_note')
const notes=document.querySelector('.notes')
let counter= parseInt(localStorage.getItem('counter')) ||0

for(let i=1;i<=counter;i++){
    let key=`user${i}`
    let value= localStorage.getItem(key)
    if(value){
        addNoteToDOM(key,value)
    }
}
  
FormInput.addEventListener('submit',function(event){
    event.preventDefault()
    ++counter
   
    localStorage.setItem('counter',counter)
   let key=`user${counter}`
   let value= NoteInput.value
   localStorage.setItem(key,value)
   addNoteToDOM(key,value)
   NoteInput.value=''

   notes.addEventListener('click',function(event){
    if(event.target.classList.contains('btn_delete')){
        const container= event.target.parentElement
        let key=container.getAttribute('data-key')
        localStorage.removeItem(key)
        container.remove()
    console.log('Delete button clicked!')
   }
    
   })
})
notes.addEventListener('change',function(event){
    if(event.target.classList.contains('checkbox')){
        const container= event.target.parentElement
        let key=container.getAttribute('data-key')  
       localStorage.setItem(`${key}_checked`, event.target.checked);
    console.log('Checkbox changed!')
   }
   
});

    
    
    

function addNoteToDOM(key, noteName) {
    notes.insertAdjacentHTML('beforeend', `
            <div class="container_new_note" data-key="${key}">
            <input class="checkbox" type="checkbox">  

            <div class="note_name_display">${noteName}</div>

            <button class="btn_delete">Delete</button>
            </div>

            
    `);
}