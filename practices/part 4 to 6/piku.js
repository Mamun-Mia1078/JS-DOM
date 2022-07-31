// const grandpa = document.querySelector('.todo')
// const parent = document.querySelector('#ul');
// const children = parent.children; 
// const children1 = grandpa.querySelectorAll('.li');
// console.log(children1);



// console.log(children[2]);


const children1 = document.querySelector('.li')
const grand = children1.closest('.todo')
console.log(grand);
const children2 = children1.previousElementSibling;
console.log(children2);