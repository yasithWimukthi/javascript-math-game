const form = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Add todos 

const generateTemplate = todo=>{

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;

};



form.addEventListener("submit",e=>{

    e.preventDefault();
    const todo = form.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        form.reset();
    }
    
});


// Delete todos

list.addEventListener("click",e=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

//Search todos

const filterTodos = (term) =>{
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.add("filtered"));

    Array.from(list.children)
        .filter((todo) =>todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.remove("filtered"));
};


// Keyup event

search.addEventListener("keyup",()=>{
    const term = search.value.trim();
    filterTodos(term);
});