

var name = 'Derek';
console.log(name);

if (name == 'Derek') {
    console.log(name);
}

var names = ['Nisarg', 'Ken', 'Josh', 'Thomas', 'Wes']

for(var i=0; i<names.length; i++) {
    console.log(names[i]);
}

console.log('\n\n');

var start = 0;
while(start<10) {
    console.log(`${start+1}.) ${start}`);
    start++;
}

console.log('\n\n');

countDown = 10;
do{
    console.log("Ladies and Gentlemen, start your engines!");
    countDown--;
} while(countDown >= 0)

var doSomethingElse = function(a_something){
    console.log(`Hello, ${a_something}`);
}

doSomethingElse('tool');