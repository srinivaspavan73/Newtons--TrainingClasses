// New way
// const list_items = document.querySelectorAll('li');
// console.log(list_items);
// console.log(list_items[0]);
// console.log(list_items[1]);
// console.log(list_items[2]);
// console.log(list_items[3]);
// console.log(list_items[4]);
// console.log(list_items[5]);
// Here we get Null as o/p if there is no next or previous element sibling.


// Old way
const thirdItem = document.getElementById('item3');
// console.log(thirdItem.previousElementSibling.previousElementSibling.previousElementSibling);
// console.log(thirdItem.previousElementSibling.previousElementSibling);


console.log(thirdItem.previousElementSibling)
console.log(thirdItem);
console.log(thirdItem.nextElementSibling);

// console.log(thirdItem.nextElementSibling.nextElementSibling);
// console.log(thirdItem.nextElementSibling.nextElementSibling.nextElementSibling);

// Here we get Null as o/p if there is no next or previous element sibling.


