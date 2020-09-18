// Create a 2-dimensional array with 5 questions and 5 answers
var qanda = [['Do penguins have knees?', 'Yes'], ['Dennis is asshole. Why Charlie hate?', 'Because Dennis is a bastard man.'], ['Longest living vertebrate?', 'Greenland Shark'], ["Name of Salvador Dali's ocelot?", 'Babou'], ['Who will win the Premier League this year?', 'Manchester City']];

// This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page
function print(message, id) {
  var outputDiv = document.getElementById(id);
  outputDiv.innerHTML = message;
}

// This code snippet builds out the HTML list. 
function buildList(arr) {
  var listHTML = "<ol>";
  for (var i = 0; i < arr.length; i++) {
    listHTML += "<li>" + arr[i] + "</li>";
  }
  listHTML += "</ol>";
  return listHTML;
}

// Create a FOR loop that loops through your 2-dimantional array. Create variables for quesions, answers and reponses respectively. Make sure the
// questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
// correct and how many answers you have wrong. 
//
// EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
// to accomplish this is very beneficial. Do your best!
var responses = [];
var correct = [];
var incorrect = [];
var answers = [];
if (window.confirm("Ready to begin your quiz?")) {
  for (var i = 0; i < qanda.length; i++) {
    var ans = prompt(qanda[i][0]);
    responses.push(ans);
  }
}
//console.log(responses);
for (var i = 0; i < qanda.length; i++) {
  answers.push(qanda[i][1]);
  if (responses[i].toLowerCase() === qanda[i][1].toLowerCase()) {
    correct.push(qanda[i][0]);
  } else {
    incorrect.push(qanda[i][0]);
  }
}
print(`You got ${correct.length} question(s) right.`, 'total');
print(buildList(correct), 'correct');
print(buildList(incorrect), 'incorrect');
print(buildList(responses), 'responses');
print(buildList(answers), 'answers');
// For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.
