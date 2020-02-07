function sumTwoSmallestNumbers(numbers) {  
    //let numbers =[]
   let numbersIncr = numbers.sort(function(a,b) {return a-b})
     let s = numbersIncr[0]
     let p = numbersIncr[1]
       return s+p;
     console.log(numbersIncr);
   }
   
   
   console.log((sumTwoSmallestNumbers([15, 28, 4, 2, 43, 56])));
               
   
   
   
   