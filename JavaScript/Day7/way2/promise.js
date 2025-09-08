// Syntax
new Promise((resolve,reject) => {
    if(success){
        resolve(value);
    } else{
        reject(error);
    }
});

let password = "Pavan@123";
let myPromise = new Promise((resolve,reject)=>{
    console.log('checking the password');
    setTimeout(()=>{
        if(password=="@Pavan123"){
        resolve('Login successfully');
        }else{
            reject('Incorrect Password');
        }
    },2000);
}) 
myPromise.then(result =>{
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(()=>{
    console.log('Executed successfully');
})