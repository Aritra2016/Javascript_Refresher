
 let globalVar ="I am a global variable";

function outerFun(){

   let outerVar= "I am from outer function in lexical scope";//lexical scope
   function innerFun(){

      console.log(outerVar);
      console.log(globalVar);
   }
   innerFun();
}
outerFun();