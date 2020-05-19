const firstName = "Denis";
const lastName = "Mescheryakov";
const age = 30;
const str = "Hello my name is Denis";

let value;

value = firstName + lastName;
value = firstName + " " + lastName;
value += ' i am ' + age;

value = firstName.length;
value = firstName[2];
value = lastName[lastName.length - 1].toUpperCase();

value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);

value = str.indexOf('n', 10);
value = str.indexOf('!'); // -1
value = str.includes('my'); //true
value = str.includes('DENIS');// false

value = str.slice(0, 5);
value = str.slice(1, -1);

value = str.replace('Denis', 'Den');
console.log(value);
