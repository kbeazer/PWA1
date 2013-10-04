// Kareem K. Beazer
// 10/4/13
// JS Practice


//create a function named 'avgNumbers'
//- accept 1 parameter into the function that will be an array of unlimited numbers
//- find the average of all the numbers
//- return the average from the function
//- console.log the answer outside of the function

var noLimit= [40,40];
function avgNumbers(numbersArray){
    var result= 0;
    for(var i=0;i<numbersArray.length;i++){
        result+= numbersArray[i];
    } return result/(numbersArray.length)
}console.log(avgNumbers(noLimit));

//create a function named 'fullName'
//- accept 2 parameters into the function that are strings (firstname and lastname)
//- return the name after it has been concatenated
//- console.log the answer outside of the function

var firstName= 'Kareem';
var lastName= 'Beazer';
function fullName(firstName, lastName){
    return firstName+' '+lastName;
}console.log(fullName(firstName, lastName))

//create a function named 'wordCount'
//- accept 1 parameter into the function that is a long string of text words
//- create a function that counts all the words and return the answer
//- console.log the answer outside of the function

var text= 'This is going to be a tough one to pull off';
function wordCount(counter){
   var words= 0;
   for(var i=0;i<counter.length();i++){
       if(counter==''){
           words+=i;
       }
   }  return words+1;
} console.log(wordCount(text));