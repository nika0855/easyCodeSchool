
const firstName = "Denis";
const lastName = "Mescheryakov";
const age = 30;

let str;
 str = "Hello my name is " + firstName + ' ' + lastName;

 str =  '<ul>' +
        '<li>firstName: ' + firstName + '</li>' +
        '<li>lastName: ' + lastName + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '</ul>';

// E56
str = `
<ul>
<li>firstName: ${firstName} </li>
<li>lastName:  ${lastName} </li>
<li>Age: ${age} </li>
<li>Math.random: ${Math.random() * 10} </li>
<li>5 + 5: ${5 + 5} </li>
</ul>
`

document.body.innerHTML = str;
