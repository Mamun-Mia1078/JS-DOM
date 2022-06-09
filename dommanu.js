const newElement = document.createElement('li')
newElement.innerText = 'Item Five';
const ul = document.querySelector('ul')
ul.appendChild(newElement) // adding element in last place
// adding elements first place
ul.prepend(newElement)


