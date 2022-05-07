function myFunction(text){
    console.log(text);
}
const button = document.getElementById('button');
button.addEventListener('click',function(){
    myFunction("Hello world")
})