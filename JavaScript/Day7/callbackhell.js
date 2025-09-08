function register(callback) {
  setTimeout(() => {
    console.log("User Registered");
    callback();
  }, 1000);
}

function login(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function fetchData(callback) {
  setTimeout(() => {
    console.log("Fetched User Data");
    callback();
  }, 1000);
}

function displayData() {
  setTimeout(() => {
    console.log("User Data Displayed");
  }, 1000);
}


register(function () {
  login(function (){
    fetchData(function (){
      displayData();
    });
  });
});

