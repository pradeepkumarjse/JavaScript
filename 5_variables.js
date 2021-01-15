/*

variables :
  let, const, var

*/
let message;
message="Hey, How are you?";
console.log(message);

let a=90,
b=80,
c=70;
console.log(a);
console.log(b);
console.log(c);

//main property
message="Hey, I'm fine";
console.log(message);


//creating constant in javascript
const user="pradeep";
console.log(user);
//user="pradeep kumar";

if(5>2) {
    console.log("Inside if block");
    let city="Noida";
    console.log(city);
    var address="delhi";
    console.log(address);

}


//console.log(city);
//console.log(address);

//var- global or function scope | var has no block scope
var myvar=90;

var x=90;
var x=80;
console.log(x);//80
console.log(x);//80

//var tolerates redeclaration

z=78;
console.log("value of z is "+z);
var z;



let l=90;
// let a=88;   it gives error


/*
naming rule
1.All alphabets but it can not starts with digits
2. Name must contain only letters, digits or ssymbols $ and _
3. Keywords can not be used as variable name
    let let=90;---invalid
    let Let=90;---valid

4. javascript is case sensitive 
    let const="hello";---invalid
    let Const="hello";---valid
    
*/



