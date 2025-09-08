async function register() {
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("User Registered");
                resolve()
            }, 1000);
    })
}

async function login() {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            console.log("User Logged In");
            resolve()
        }, 1000);
    })
}

async function fetchData() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Fetched User Data");
        resolve()
    }, 1000);
    })
}

async function displayData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("User Data Displayed");
            resolve()
        }, 1000);
    })
}



async function user()
{
    await register(); // Wait 1 second

    await login(); // Wait 1 second

    await fetchData(); // Wait 1 second 

    await  displayData() // Wait 1 second
}


user();





