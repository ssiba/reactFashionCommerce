
module.exports.multipleOf3AndOr5 = (num) => {
    

    console.log("type of num is:"+typeof(num));
    if(typeof(num)=="number")
    {

    
   if( (num%3==0 && num%5==0))
   {
    return "multipleOf3And5";
   }
   else if(num%3==0)
   {
    return "multipleOf3";
   }
   else if(num%5==0)
   {
    return "multipleOf5"
   }
   else  if( !(num%3==0 && num%5==0))
   {
    return "notAMultipleOf3And5"
   }
    }
    else
    {
        return "inputNotANumber";
    }
   //else if(!typeof(num)==Numb

   
    
}
