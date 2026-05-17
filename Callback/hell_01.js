
function loadingData(callback){
   setTimeout(()=>{
      console.log(" 1-Loading data...")
      callback();
   },2000);
}

function collectingData(){
   setTimeout(()=>{
      console.log(" 2-Collecting data...");
   },2000);
}

function approvingData(){
   console.log(" 3-Approving data...");
}

function approved(){
   console.log(" 4-Data approved.");
}

loadingData(function(){

});
collectingData();
approvingData();
approved();