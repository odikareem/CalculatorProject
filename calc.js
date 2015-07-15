var box = document.getElementById('display');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');


function addtoscreen(x)
{
  var user_input = num1.value;
  var user_input1 = num2.value;
  box.value = user_input;
  var new_number = user_input + x;
  var result = document.getElementById('display');
  result.value = new_number;

  if(x == 'C'){
    box='';
  }

  box.innerHTML = box.innerHTML + x ;

  
}





function answer(x)
{

  var user_input =  parseInt(num1.value);
  var user_input1 = parseInt(num2.value);
  // box.value = user_input;
  // var new_number = user_input + x;
  // var new_number1 = new_number + user_input1;
  result = user_input  user_input1;
  // console.log(user_input);
  // console.log(user_input1);
  // console.log(box.value);
  // console.log(new_number);
  // console.log(new_number1);
  var resultString = num2.value +" = " + result;
    addtoscreen(resultString);


}
