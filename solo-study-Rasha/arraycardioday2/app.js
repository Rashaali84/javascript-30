//Global scope variables
const persons = [{ first: 'Bill', year: 1980 },
{ first: 'joan', year: 1980 },
{ first: 'Mess', year: 1980 },
{ first: 'Rab', year: 1980 }];

const comments = [{ text: "Saab", id: 1 }, { tex: "Volvo", id: 2 }, { text: "BMW", id: 3 }, { text: "comments", id: 4 }];

//Handlers and app interactions 
//some() // is at least one persone >19 years ols
debugger;
const isAdults = persons.some(function (person) {
    if (((new Date()).getFullYear()) - person.year > 19)
        return person;
});
console.log({ isAdults });


//user every is all > 19 ? use arrow function instead of call back function
debugger;
const allAdults = persons.every(person => ((new Date()).getFullYear()) - person.year > 19);
console.log({ allAdults });

//find() is like filter but instead of returning a subset of an array 
//it will return the first item it finds 
debugger;
const firstAdults = persons.find(function (person) {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year > 19) {
        return true;
    }
});
console.log(firstAdults);

//use find to return a specific comment with specific id 
const commentWanted = comments.find(function (comment) {
    if (comment.id == 2)
        return true;

});
console.log(commentWanted);

// find comment with id=4 and delete it .. use findindex() 
const commentIndex = comments.findIndex(function (comment, index) {
    if (comment.id == 2)
        return index;

});
//use splice to delete 
comments.splice(commentIndex, 1);
console.log(comments);
