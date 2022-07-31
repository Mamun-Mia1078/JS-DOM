const submit  = document.querySelector('form');
submit.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target);
});
