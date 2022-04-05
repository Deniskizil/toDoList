const form = document.querySelector('form.list');
console.log(form);
const ul = document.querySelector('.task_list');
console.log(ul);

const htmlState = function(todo){
    let li = `
    <li>${todo}<span class="del">X</span></li>`;
    ul.innerHTML += li;
}

form.addEventListener('submit', function(e){
    //  console.log(e);
    e.preventDefault();
    let todo = form.task.value;
    if(todo.length){
        htmlState(todo);
        form.reset();
    }
    console.log(todo);
})
ul.addEventListener('click', e => {
    if(e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }
    
})
