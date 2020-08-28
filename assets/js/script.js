//start jquery
$(document).ready(function() {
//goal - create a schedule using a daily planner

//open planner  - current day is displayed at top of calendar
m = moment(); // set m as the moment
var currentDay = m.format('dddd, MMMM Do')
$("#currentDay").html(currentDay);

// to create time blocks we need to set a variable equal to 12:01 am on the current day
const dayStart = m.startOf('day');
console.log(dayStart);
//set variable for each time block with 12:01 plus how many hours

var hoursArray = [
8, 9, 10 , 11, 12, 13, 14, 15, 16, 17
];

for (var i = 0; i < hoursArray.length; i++) {
    hour = [i];
    
}

// scroll down to time blocks for standard business hours

// view time blocks - each time block color coded to denote past, present future

// click into time block and enter event
var createEvent = (function() {
    //create the event here - this is where the user will click into the event 
});
// click save button to save event to local storage
var saveEvent = (function(){
    //save event code here
});

var loadEvent = (function(){
 // load event functionality here
});

// use this object as example when configuring to save to local storage
const jsonObj = {
    momentObj: m
}
console.log(JSON.stringify(jsonObj));
// 

}); //end document.ready;