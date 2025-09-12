const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');




function addScripture() {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌'

    li.append(deleteButton);
    list.append(li);

    if (input.value.trim() !== "") {
        return;
    }
}

    deleteButton.addEventListener('click',() => {
    list.removeChild(li);
    input.focus();
    
    });