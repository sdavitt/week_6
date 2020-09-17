// DOCUMENT OBJECT MODEL
// ==============================
var divs = document.getElementsByTagName('div');

//for (var div in divs) {
 //   console.log(divs[div]);
 //   break;
//}

var formCheckLabels = document.getElementsByClassName('form-check-label');
for (var i in formCheckLabels){
    if (formCheckLabels.hasOwnProperty(i)){
        var element = formCheckLabels[i];
        console.log(element);
    }
}

var contentDiv = document.getElementById('content');
console.log(contentDiv);
contentDiv.innerHTML = '<strong>This HTML works!</strong>';
console.log(contentDiv);