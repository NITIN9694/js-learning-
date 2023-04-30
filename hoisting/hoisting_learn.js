/* What is hoisting? */

/* Hoisting is phenomena  where we can call the the var or function before the initlaize
*/

/*What is Window in js? */
/* window is global oject which create when this is created `
   global space - any varibel and fun which is not inside the any fun. called global space 
  
*/

var a = 10;
console.log(window.a);
console.log(this.a);



getName();
console.log(7);

var x = 8;

function getName(){
    console.log("Hey What's up!!");
}

console.log(getName);