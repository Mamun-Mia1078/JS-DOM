console.dir(document.domain);
console.log(document.head);
console.log(document.URL);
console.log(document.body );
document.title = "playing With DOM";
console.log(document.all);// dekhte arrayr moto hole o array na 
for (let element of document.all){
    console.log(element);
}
console.log(document.images);// for all image 
console.log(document.forms);
