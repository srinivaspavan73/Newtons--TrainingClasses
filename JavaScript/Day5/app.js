let count =2 // to track the count of items in list

const add = document.getElementById('add');
const remove = document.getElementById('remove');
const list = document.getElementById('myList');

add.addEventListener('click',()=>{
    const newItem = document.createElement('li');
    // const text = document.createTextNode('Item '+count);
    newItem.innerHTML=`item ${count}`
    // newItem.appendChild(text);
    list.appendChild(newItem);
    count++;
});

remove.addEventListener('click',()=>{
    const lastItem = list.lastChild;
    if(lastItem){
        list.removeChild(lastItem);
        count--;
    }
})