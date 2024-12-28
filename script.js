const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list');

function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a task');
    }  else{
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        listItem.appendChild(span);
    }
    inputBox.value = '';
    saveList();
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveList();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        // alert('Task removed');
        saveList();
    }
} );

function saveList() {
    localStorage.setItem('list', listContainer.innerHTML);
}

function loadList() {
    listContainer.innerHTML = localStorage.getItem('list');
}

loadList();