const myLink = document.getElementById('myLink');
const image = document.getElementById('image');

// access a attribute value
// way1
console.log(myLink.href);
console.log(myLink.id);
console.log(myLink.target); 
// way2
console.log(myLink.getAttribute('href')); 

// modify attribute values
myLink.href = 'https://www.youtube.com/';
myLink.target = '_self';
// Adding new attribute
myLink.setAttribute('title','Visit Youtube');

// set attribiutes for image( adding size to existing images)
image.setAttribute('width','200');
image.setAttribute('height','250');
// Changing the source of the image
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNcROPazO1jI9SFGLW0xdtny_KZfkM-wtLA&s'
