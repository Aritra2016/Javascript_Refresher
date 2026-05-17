
function fun(val){
   console.log("The value is "+val);

}

function add(a,b,callback){
   let sum=a+b;
   callback(sum);
   // it will function call back fun and pass sum as argument to it
}

add(5,10,fun);