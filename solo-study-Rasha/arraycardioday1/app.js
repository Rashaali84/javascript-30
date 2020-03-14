
//Global scope arrays
const arr = [{ first: 'Bill', last: 'gates', year: 1980, passed: 2012 },
{ first: 'joan', last: 'hema', year: 1980, passed: 2011 },
{ first: 'Mess', last: 'exk', year: 1980, passed: 1999 },
{ first: 'Rab', last: 'soob', year: 1980, passed: 2020 }];

const cars = ["Saab", "Volvo", "BMW"];

//filter people who died before 2000
//I will use arrow function instead of call back function 
function handlerForFilter() {
    debugger;
    //use arrow function instead of call back functions 
    const before2000 = arr.filter(value => value.passed > 2000);
    //use reduce to concatenate names
    const yearsString = before2000.reduce((acc, val) => {
        return acc + val.first + " ";
    }, "");

    alert("The Peopele are : " + yearsString);
}
//handler for map()
function handlerForMap() {
    debugger;
    //use arrow function instead of call back functions 
    const mapFirstNames = arr.map(value => '<li>' + value.first + '</li>');
    //use reduce to concatenate names..use join to remove , 
    const html = '<ul>' + mapFirstNames.join('') + '</ul';
    const divDisplay = document.getElementById("listMap");
    divDisplay.innerHTML = html;
    //to prevent reloading the page again 
    event.preventDefault();

}
function sortAlphabatically() {
    const sortedCars = cars.sort(function (textA, textB) {

        return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
    });
    const sortedCarsLi = sortedCars.map(value => '<li>' + value + '</li>');

    const html = '<ul>' + sortedCarsLi.join('') + '</ul';
    const divDisplay = document.getElementById("listMap");
    divDisplay.innerHTML = html;
    //to prevent reloading the page again 
    event.preventDefault();
}