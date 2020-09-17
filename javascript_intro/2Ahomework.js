console.log("Homework 2A Javascript");

//QUESTION 1
var biggerNumber = function (num1, num2) {
    console.log("1)")
    if (num1 > num2){
        console.log(num1); 
    }
    else if (num2 > num1){
        console.log(num2);
    }
    else {
        console.log("The numbers are equal.");
    }
}
biggerNumber(5, 7);


//QUESTION 2
var threeNumSort = function (num1, num2, num3) {
    console.log("2)");
    if (num1 >= num2 && num2 >= num3){
        console.log(num1.toString() + ">" + num2.toString() + ">" + num3.toString());
    } else if (num1 > num3 && num3 > num2) {
        console.log(num1.toString() + ">" + num3.toString() + ">" + num2.toString());
    }
    // you get the point its just a bunch of these but why would you do this with conditionals and not just array and sort
}
threeNumSort(3,1,2);

//QUESTION 3
var largestOfFive = function(a, b, c, d, e){
    console.log("3)")
    if (a>b && a>c && a>d && a>e){
        console.log(`${a} is the largest number.`)
    //again its just one of those blocks for each of the five numbers...
    }
}
largestOfFive(5,4,3,2,1);

//QUESTION 4
var evenOrOdd = function(){
    console.log("4)");
    for(var i = 0; i<16; ++i){
        if (i%2 == 0){
            //console.log(`${i} is even.`);
        } else{
            //console.log(`${i} is odd.`);
        }
    }
}
evenOrOdd();

//QUESTION 5
var multiplesThreeFive = function(){
    console.log("5)");
    for(var i = 1; i<101; ++i){
        if (i%3 == 0 && i%5 == 0){
            //console.log("FizzBuzz");
        } else if (i%5 == 0){
            //console.log("Buzz");
        } else if (i%3 == 0){
            //console.log("Fizz");
        } else{
            //console.log(i);
        }
    }
}
multiplesThreeFive()

//QUESTION 6
var divThreeCounter = function(){
    console.log("6)");
    var count = 0;
    for(var i = 1; i<1001; ++i){
        if(i%3 == 0){
            count++;
        }
    }
    console.log(count)
}
divThreeCounter()

//QUESTION 7
var pyramidOutput = function(){
    console.log("7)");
    console.log("    1");
    console.log("   121");
    console.log("  12321");
    console.log(" 1234321");
    console.log("123454321");
}
pyramidOutput()

//QUESTION 8
var diamondOutput = function(){
    console.log("8)");
    console.log("    1");
    console.log("   121");
    console.log("  12321");
    console.log(" 1234321");
    console.log("123454321");
    console.log(" 1234321");
    console.log("  12321");
    console.log("   121");
    console.log("    1");
}
diamondOutput()