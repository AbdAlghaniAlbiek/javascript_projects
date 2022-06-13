const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchForm = document.querySelector('.search');

const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between aling-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};


// Add todos
addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});


// Delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});



// Search todos
const filterTodos = (term) => {

    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};


searchForm.addEventListener('keyup', () => {
    const term = searchForm.search.value.trim();
    
    filterTodos(term);
});



