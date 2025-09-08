let count=0;
let interval=setInterval(function(){
	console.log(count);
	count=count+1;
    if(count==5)
    {
        clearInterval(interval)
    }
	},3000);
