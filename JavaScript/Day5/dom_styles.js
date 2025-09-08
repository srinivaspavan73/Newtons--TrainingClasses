// Adding CSS properties to HTMLAllCollection(ex:list) elements
const list_elements = document.querySelectorAll('li');

list_elements[0].style.backgroundColor = 'blue';
// background-color:[small 'C']  backgroundColor[ Captial 'C']
list_elements[0].style.color = 'white';
list_elements[0].style.fontSize = '26px';

// using index might take time, so we use loops
list_elements.forEach(item => {
    item.style.backgroundColor = 'blue';
    item.style.color = 'white';
    item.style.fontSize = '26px';
});