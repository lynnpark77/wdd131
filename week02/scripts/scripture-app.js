const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');




function addScripture() {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌'


    deleteButton.setAttribute('aria-label', 'Remove ${input.value}')
    deleteButton.title = 'Remove ${input.value}';

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();

    });


    li.append(deleteButton);
    list.append(li);   
}

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (input.value.trim() !== "") {
        input.focus();
        return;
    }
    const li = createListItem(value);
    list.append(li);
    input.value = '';
    input.focus();

});