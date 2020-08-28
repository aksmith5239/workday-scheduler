//start jquery
$(document).ready(function() {
//goal - create a schedule using a daily planner

//open planner  - current day is displayed at top of calendar
m = moment(); // set m as the moment
var currentDay = m.format('dddd, MMMM Do')
$("#currentDay").html(currentDay);

// to create time blocks we need to set a variable equal to 12:00 am on the current day
var start = m.startOf('day');
var firstEventTime = start.add(8, 'hours');
console.log(firstEventTime);
//set variable for each time block with 12:01 plus how many hours ???



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