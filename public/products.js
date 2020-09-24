const product = document.querySelector('#product');
const price = document.querySelector('#price');
const category = document.querySelector('#category');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');


submit.addEventListener("click", handleFormSubmit);
clear.addEventListener("click", handleFormClear);

function handleFormSubmit() {
    alert("You've clicked a button");
    
}

function handleFormClear() {
    alert("You've cleared the form.");
}