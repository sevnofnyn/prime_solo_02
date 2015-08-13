// ! ! !
// Three Bugs


var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM

position = document.getElementById('content');



//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'

//the array for loop  did not have [i];
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);

  //console.log(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array[0];
//console.log(newArray[0]); logging this prints out their names...
  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;

  console.log(newArray[1]);// this consoles out the negative number, not rounded number that is showing for %

  newArray[2] = Math.round(baseSalary * (1.0 + bonus)); //this got the bonus amount and base salary * bonus to round

  console.log(newArray[2]); //this logs the not rounded bonus amount

  newArray[3] = Math.round(baseSalary * bonus);//this math round took care of a rounding issue with the bonus amount for Scout.

  console.log(newArray[3]); // this has the negative adjusted salary
  
  


//var myVar2 = a.join(', ');  adapted this to make a space after each comma, renamed newArray to return newNewArray.
var newNewArray = newArray.join(',  '); 
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newNewArray;


}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; //removed -1
}


//this is from our assignment
 //for(var i = 0; i < employeesArray.length; i++)
//{
 // console.log("Employee "+ (i + 1) +" is "+ employeesArray[i]["name"] +", who will get a "+ employeesArray[i]["percent"] +"% raise, which will raise his/her income to $"+ commatize(employeesArray[i]["adjusted"]) +", with his/her bonus being $"+ commatize(employeesArray[i]["bonus"]) +".");
//}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
  
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;

  
}