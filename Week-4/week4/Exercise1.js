// added function for getting random number
function getNumber(max){
   return  Math.floor(Math.random() * max);
}

//Custom function is created using promise function
const asynchronousEmulator = num => {
    return new Promise((resolve, reject) => {
        const rand=getNumber(num);
        let result=rand % 5;
      setTimeout(() => {
      
         result === 0 ? reject(rand) : resolve(rand);
       }, 100);
    });
   }
  
   asynchronousEmulator(100)
  
   .then((value) =>{
    console.log(value+" is not divisible by 5");
  
  })
 
  .catch((err)=>{
    console.log(err +" is divisble by 5 so caught the error");
  
  })
  
  .finally(function(){
    console.log(asynchronousEmulator);
  });
   
//output :
//63 is not divisible by 5
//[Function: asynchronousEmulator]
//15 is divisble by 5 so caught the error
//[Function: asynchronousEmulator]