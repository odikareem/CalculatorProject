/* Method1 this method is quick but not scalable see method 2 below */

function addition(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
document.getElementById("display").innerHTML = num1 + " + " + num2 +  " = " + (parseInt(num1) + parseInt(num2));
}


function subtraction(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
document.getElementById("display").innerHTML = num1 + " - " + num2 +  " = " + (parseInt(num1) - parseInt(num2));

}

function division(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
document.getElementById("display").innerHTML = num1 + " / " + num2 +  " = " + (parseInt(num1) / parseInt(num2));

}

function multiplication(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
document.getElementById("display").innerHTML = num1 + " * " + num2 +  " = " + (parseInt(num1) * parseInt(num2));

}

function modulus(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
document.getElementById("display").innerHTML = num1 + " % " + num2 +  " = " + (parseInt(num1) % parseInt(num2));

}

function power(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
document.getElementById("display").innerHTML = num1 + " ^ " + num2 +  " = " + Math.pow(parseInt(num1), parseInt(num2));

}



/*Method2 scalable incomplete though */
// function Calc (num1,num2,add,sub,div,mul,mod, pwr,ans) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.addNums = addNums;
//     this.subNums = subNums;
//     this.multiplyNums = addNums;
//     this.divideNums = subNums;
//     this.modulusNums = addNums;
//     this.pwrNums = subNums;
// }
 

// function addNums() {
//     var ans = (this.num1+this.num2);
//     return ans;
// }

// function subNums() {
//     var ans = (this.num1-this.num2);
//     return ans;
// }
// function multiplyNums() {
//     var ans = (this.num1*this.num2);
//     return ans;
// }

// function divideNums() {
//     var ans = (this.num1/this.num2);
//     return ans;
// }
// function modulusNums() {
//     var ans = (this.num1%this.num2);
//     return ans;
// }
// function pwrNums() {
//     var ans = (this.num1^this.num2);
//     return ans;
// }






