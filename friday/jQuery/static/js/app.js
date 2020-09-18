// document.querySelector('.classname')
// document.querySelector('.id')
// document.querySelector('tagname')

// $('main #content').text('Coming to you from the main element');
// $('main > #content-sibling').text('Coming to content-child from the main element');

// var names = ["Tomas", "Guido", "Sam", "Nisarg"];

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element);
// }

// names.forEach(function(element, index) {
//     console.log(`${index+1}: ${element}`)
// });

// var listGroupItems = $('.list-group-item');
// listGroupItems.each(function(index, element) {
//     element.innerText = "Something Else";
//     console.log(element);
// })

var testForm = $('#testForm');
var inputField = $('#inputField');
var outputText = $('#outputText');
var submitBtn = $('#submitBtn');

// console.log(testForm);
// console.log(inputField);
// console.log(outputText);


// Have the text in the input form update the text in the outputText paragraph tag.
// inputField.on('keyup', function(event) {
    // console.log(inputField.val());
    //     outputText.text(inputField.val());
    // });
    
// When we click the submit button, we want what was in the input field to log out to outputText
// submitBtn.on('click', function (event) {
    // console.log('It works');
    // console.log(inputField.val());
    // outputText.text(inputField.val());
// });

// testForm.on('submit', function(event) {
//     event.preventDefault();
//     outputText.text(inputField.val());
// });

function getSkills(emplObj){
    var skillsUL = $('#skills');

    skillsUL.empty();
    emplObj.skills.forEach(function(skill, i) {
        let skillName = Object.keys(skill)[0];
        let skillLevel = Object.values(skill);
        skillsUL.append(`<li class="list-group-item"><strong>${skillName}</strong> <span class="float-right">${skillLevel}</span></li>`);
    })

    $('#skills-container').css('display', 'block');
    $('#information-container').css('display', 'block');
}


// Get API data
$.get('./static/data.json', function(response) {
    var employees = $('#employees');
    var skills = $('#skills');

    response.forEach(function (empl, i) {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        
        $(li).text(empl.name);

        $(li).on('click', function (event){
            $('#name').text(empl.name);
            $('#age').text(empl.age);
            $('#occupation').text(empl.occupation);
            $('#location').text(empl.location);

            getSkills(empl);
        })

        employees.append(li);
   })
});
