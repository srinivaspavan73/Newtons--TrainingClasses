// 2. Convert JSON <-> JS
// JS to JSON (Parsing):


// const jsonString = '{"name":"Mohan","age":25}';
// const jsObject = JSON.parse(jsonString);
// console.log(jsObject.name);  // Mohan


// JSON to JS(Stringify):

// const jsonString = '{"name":"Mohan","age":25}';
// const jsObject = JSON.parse(jsonString);
// console.log(jsObject.name);  // Mohan


// Fetch API Example// Fetching data from a public API
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error('Error:', err));



// Fetching data from a public API and handling errors
// fetch('https://jsonplaceholder.typicode.com/incorrectendpoint')  // incorrect URL
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.error('Error:', err));


//  POST Request:

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'Hello',
//     body: 'This is a post',
//     userId: 1
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error('Error:', err));


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Request failed with status ' + response.status);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (response.ok) {
//       throw new Error('Request failed with status ' + response.status);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data));


// Example (GET with async/await):

// async function fetchData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch failed:', error);
//   }
// }

// fetchData();


//  Example (POST with async/await):

 async function postData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'New', body: 'Post', userId: 2 })
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}
postData();
