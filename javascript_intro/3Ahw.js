console.log("3A Javascript Homework: Objects and Arrays");

//QUESTION 1
console.log("1.)")
var currentDate = function(){
    var cd = new Date()
    console.log(`${cd.getMonth()+1}/${cd.getDate()}/${cd.getFullYear()}`)
}
currentDate()

//QUESTION 2
console.log("2.)")
var isLeapYear = function(year){
    if ((year%4 == 0) && (year%100 != 0 || (year % 100 == 0 && year % 400 == 0))){
        console.log(`${year} is a leap year.`)
    } else{
        console.log(`${year} is not a leap year.`)
    }
}
isLeapYear(2020)

//QUESTION 3
console.log("3.)");
var isConsecutive = function(array){
    for (var i=0; i<array.length-1; i++){
        if (array[i]+1 != array[i+1]){
            console.log('False');
            return false;
        }
    }
    console.log('True');
    return true;
}
isConsecutive([1,2,3,4,5]);

//QUESTION 4
console.log("4.)");
var checkArray = function(array){
    var arrSet = new Set(array);
    if (arrSet.size == array.length){
        console.log('True');
        return true;
    } else{
        console.log('False');
        return false;
    }
}
checkArray([1,3,33,45,7,9])

//QUESTION 5
console.log("5.)");
var arrFirstN = function(array, n){
    if (array.length<n){
        console.log(array);
    } else{
        console.log(array.slice(0,n));
    }
}
arrFirstN([1,2,3,4,5], 4);

//QUESTION 6
console.log("6.)");
var arrJointoString = function(array){
    console.log(array.join('-'));
}
arrJointoString([934, 'TXS', 'MB'])

//QUESTION 7
console.log("7.)");
var mostCommon = function(array){
    var counter = {};
    var maxObj = array[0];
    var maxCount = 1;
    for (var i=0; i<array.length; i++){
        if (counter[array[i]] == null)
            counter[array[i]] = 1;
        else
            counter[array[i]]++;
        if (counter[array[i]] > maxCount) {
            maxObj = array[i];
            maxCount = counter[array[i]];
        }
    }
    console.log(`${maxObj} (${maxCount} times)`);
}
mostCommon([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

//QUESTION 8
console.log("8.)");
var numberedTh = function(color, o){
    for (var i = 0; i<color.length; ++i){
        if (i<3){
            console.log(`${i+1}${o[i]} choice is ${color[i]}`);
        } else{
            console.log(`${i+1}${o[3]} choice is ${color[i]}`);
        }
    }
}
color=['Blue','Green','Red','Orange','Violet','Indigo','Yellow'];
o=['st','nd','rd','th'];
numberedTh(color,o);

//QUESTION 9
console.log("9.)");
var duplicatesArr = function (array) {
    var counter = {};
    for (var i = 0; i < array.length; i++) {
        if (counter[array[i]] == null){
            counter[array[i]] = 1;
        } else{
            counter[array[i]]++;
        }
    }
    var x = Object.keys(counter)
    for (var i = 0; i<x.length; i++){
        if (counter[x[i]]>1){
            console.log(`${x[i]} is a duplicate appearing ${counter[x[i]]} times.`);
        }
    }
}
duplicatesArr([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

//QUESTION 10
console.log("10.)");
var stringReverse = function(string){
    console.log(string.split('').reverse().join(''));
}
stringReverse('Hello');

//QUESTION 11
console.log("11.)");
var strPangram = function(string){
    if (string === string.split('').reverse().join('')){
        console.log(`${string} is a pangram!`);
    }else{
        console.log(`${string} is not a pangram`);
    }
}
//this does not currently work for whitespace or case sensitivity but thats easy to change if needed
strPangram('madam');

//QUESTION 12
console.log("12.)");
var strSplits = function(string){
    var ans = [];
    for (var i = 0; i<string.length; i++){
        if (string.slice(0, i) == ''){
            ans.push(string.charAt(string.length/2))
        }else{
            ans.push(string.slice(0, i));
        }
        ans.push(string.slice(i,string.length));
    }
    console.log(ans);
}
strSplits('dog');


//QUESTION 13
console.log("13.)");
var stringAlphabetize = function (string) {
    console.log(string.split('').sort().join(''));
}
stringAlphabetize('nice');

//QUESTION 14
console.log("14.)");
var secondHighLow = function(array){
    var arr = array.sort((a,b) => a - b);
    console.log(`${arr[1]}, ${arr.reverse()[1]}`);
}
secondHighLow([1, 4, 3, 2, 5]);

//QUESTION 15
console.log("15.)");
var removeRepeats = function(array){
    var arrSet = new Set(array);
    console.log(Array.from(arrSet).join(''));
}
removeRepeats('Thequickbrownfoxjumpsoverthelazydog')