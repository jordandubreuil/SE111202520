window.onload = function () {
    codeForDomLab();
}

// document.addEventListener("DOMContentLoaded", function(){
//     loadCode();
// });


function loadCode() {
    codeForDomLab();
}

function codeForDomLab() {
    console.log(window);

    var p = document.querySelector('p');

    var textNode = document.createTextNode("Wouldn't you like to be a pepper too??");

    p.append(textNode);

    p.innerHTML = textNode.textContent;
}

