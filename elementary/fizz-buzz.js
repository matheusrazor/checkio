function fizzBuzz(data) {
    var fizz = 0, buzz = 0;
    
    // Confere se o número é divisível por 3 e/ou 5
    if(data % 3 == 0){
        fizz = 1;
    }
    if(data % 5 == 0){
        buzz = 1;
    }
   
    if (fizz == 1 && buzz == 1){
        return "Fizz Buzz"
    } else if (fizz == 1){
        return "Fizz"
    } else if (buzz == 1){
        return "Buzz"
    } else return data.toString() 
}
