// MAD LIBS GAME
// learn : arr.some() , selectedIndex, change event listener , return, innerText

//Assign variables
const peopleDropdown = document.getElementById('people-dropdown')
const verbsDropdown = document.getElementById('verbs-dropdown')
const locationDropdown = document.getElementById('location-dropdown')
const foodDropdown = document.getElementById('food-dropdown')
const madLibTextResult = document.getElementById('madlib-text')
const generateMadLibBtn = document.getElementById('generate-madlib-btn')

let person;
let verb;
let site;
let food;


//peopleDropdown.addEventListener('change', () => console.log('event fired'))

//Create a change event for each of the dropdown options
peopleDropdown.addEventListener('change', (e) => (person = e.target.value));
verbsDropdown.addEventListener('change', (e) => (verb = e.target.value));
locationDropdown.addEventListener('change', (e) => (site = e.target.value));
foodDropdown.addEventListener('change', (e) => (food = e.target.value));


const resetValues = () => {
    //Set the dropdowns to the first option in the select list
peopleDropdown.selectedIndex = 0;
verbsDropdown.selectedIndex = 0;
locationDropdown.selectedIndex = 0;
foodDropdown.selectedIndex = 0;
person = undefined;
verb = undefined;
site = undefined;
food = undefined;

};

//Create a click event for the button
generateMadLibBtn.addEventListener('click', () => {
    console.log('This button was clicked');

//Create three sentences for the text array
    const madLibsArr = [
`${person} was ${verb} in ${site} and had ${food}`,
`While ${verb} in ${site}, ${person} had ${food}`,
`${person} loves to treavel to ${site} and eat ${food} while ${verb}`,
     ];

const randomIndex = (Math.floor(Math.random() * madLibsArr.length));

//Check if the values have been selected using the arr.some method
if([person, verb, site, food].some((userSelection) => userSelection === undefined)) {
    alert('Please choose a selection from each of the dropdowns')

    //Exit the function if the user does not make any selections
    return;
}

    //Display the Mad Libs result on the page
    madLibTextResult.innerText = madLibsArr[randomIndex];

    //reset the user selection after each result is displayed
    resetValues();

});

