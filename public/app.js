const addBtn = document.querySelector('.addBtn');
const noteContainer = document.querySelector('.note-container');
const saveBtn = document.querySelector('.save');
const messageDiv = document.querySelector('.message');
const textInput = document.querySelector('#note-input');
const sidebar = document.querySelector('.sidebar');
const notesDiv = document.querySelector('.notes');

// [+] Functions [+]
// Add note
const addNote = (noteToAdd) => {
	const note = document.createElement('div');
	note.classList.add('note'); 

	const newNote = document.createElement('div');
	newNote.classList.add('note-title');
	newNote.innerText = noteToAdd;

	const deleteBtn = document.createElement('div');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

	note.appendChild(newNote);
	note.appendChild(deleteBtn);

	notesDiv.appendChild(note);
}

// Delete a note
const deleteNote = (event) => {
	event.target.parentElement.remove();
}

// [+] Events [+]
addBtn.addEventListener('click', (e) => {
	noteContainer.classList.remove('block');
	messageDiv.classList.add('block');
})

saveBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (textInput.value) {
		noteContainer.classList.add('block');
		messageDiv.classList.remove('block');
		
		addNote(textInput.value);
		textInput.value = '';
	}
})

notesDiv.addEventListener('click', (e) => {
	console.log(e.target);
	const deleteBtn = e.target.parentElement;
	if (deleteBtn.classList[0] === 'delete') {
		deleteBtn.parentElement.remove()
	}
})

