//Immediately Invoked Function Expressions (IIFE)

(function chai(){      //named IIFE
    console.log(`DB Connected`);
})();
//*sometimes it create problem bcz of pollution of global scope, so for removing that pollutions we used IIFE.


(()=>{
    console.log(`db connected`)
})();



( (name)=>{
    console.log(`${name},db connected`)
})("Noor");

