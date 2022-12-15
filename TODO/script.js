
const addButton= document.querySelector('#add');

const updateData=()=>{
    const textAreaData=document.querySelectorAll('textArea');
    const notes=[];
    textAreaData.forEach((note)=>{
return notes.push(note.value);

    })
    console.log(notes);

    localStorage.setItem('notes',json.stringify(notes));
    }


const addnewNote=(text=' ') =>{
    const note=document.createElement('div');
    note.classList.add('note');

    const htmlData=` 
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text? "" : " hidden"} "></div>
<textarea class=" ${text? "hidden" : "" }"></textarea> `;
note.insertAdjacentHTML('afterbegin',htmlData);
//console.log(note);

//getting the refrneces

const editButton=note.querySelector('.edit');
const delButton=note.querySelector('.delete');
const mainDiv=note.querySelector('.main');
const textArea=note.querySelector('.textarea');

//deleting the node
delButton.addEventListener('click', ()=> {
    note.remove();
    updateData();
})

//toggle 
textArea.value=text;
mainDiv.innerHTML=text;

editButton.addEventListener('click', ()=> {
     mainDiv.classList.toggle('hidden');
     textArea.classList.toggle('hidden');

})

textArea.addEventListener('change',(event)=>{
const value=event.target.value;
mainDiv.innerHTML=text;

updateData();
})


document.body.appendChild(note);
//it appemndsnode aslast child of node

//getting data from localstorage
const notes=json.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>
        addnewNote(note)
        );
}




}

addButton.addEventListener('click', () => addnewNote());

