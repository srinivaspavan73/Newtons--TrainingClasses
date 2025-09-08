function register() {
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("User Registered");
                resolve()
            }, 1000);
    })
}

function login() {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            console.log("User Logged In");
            resolve()
        }, 1000);
    })
}

function fetchData() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Fetched User Data");
        resolve();
    }, 1000);
    })
}

function displayData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("User Data Displayed");
            resolve()
        }, 1000);
    })
}

register()
.then(()=>login())
.then(()=>fetchData())
.then(()=>displayData())
.catch(()=>console.log("error"))
.finally(()=>console.log("final block is executed"))