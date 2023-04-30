//1.function Statment 

function a(){
    console.log("this is functions statment");
}

a();

//2.function expression
//assgin function in a varibel called function expression

var b = function (){
    console.log("this is function expression");
}
b();

//difference between function expression and function statement

//if we host both a(); and b(); then b give error of not difine beause of b is var 

///3.  Anonymos Function 
/// A fun with out name called Anonymos function we used only we have to assign  that fun

 function (){
   return console.log("this is function expression");
}

///4 First Class Function
/// Abilty to use fun as a value can be passed as a argument and return called first called function

var b = function (param1){
    return function xyx()
    {

    }
}

console.log(b());