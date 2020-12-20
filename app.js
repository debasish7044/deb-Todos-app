
// selected element
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');



//created a reusable function for adding new todlist in the form html
const generateNewTemplate = valueOfTodoList  => {

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${valueOfTodoList}</span>
  <i class="far fa-trash-alt delete"></i>
  </li>
  `
   list.innerHTML += html

}

// added event listener to form and used reset and trim method for trim space and reset the previous value in input

addForm.addEventListener('submit', event => {
   event.preventDefault();
   const valueOfTodoList = addForm.add.value.trim();
   
   if(valueOfTodoList.length){

     generateNewTemplate(valueOfTodoList);

     addForm.reset();
   }

});

// deleting todlist by using event delegation

list.addEventListener('click', event => {
   if(event.target.classList.contains('delete')){
      event.target.parentElement.remove();
   }
});

//keyup event for search todo list
//array.from method to convert htmlcollection in node collection
//Filter todoList


const filtertodoList = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('filtered'))

  Array.from(list.children)
    .filter(todo =>  todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'))
}

search.addEventListener('keyup', event => {
   event.preventDefault();
   const term = search.value.toLowerCase().trim();
   filtertodoList(term);
});
