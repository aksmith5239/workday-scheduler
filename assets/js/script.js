//start jquery
$(document).ready(function() {
//goal - create a schedule using a daily planner

//open planner  - current day is displayed at top of calendar
m = moment(); // set m as the moment
var currentDay = m.format('dddd, MMMM Do')
$("#currentDay").html(currentDay);

// to create time blocks we need to set a variable equal to 12:00 am on the current day
var start = m.startOf('day');

time = moment(currentDay, "L").set("hour", 17);
console.log(time);
//set variable for each time block with 12:01 plus how many hours ???

//variables we need to create:
var eventHour = "";

// scroll down to time blocks for standard business hours

// view time blocks - each time block color coded to denote past, present future

// click into time block and enter event
var createEvent = (function(eventText, eventDate, eventList) {
    var eventLi = $("<li>").addClass("list-group-item d-flex ui-state-default mt-0 p-0");
    var eventHourDiv = $("<div>").addClass("col text-left hour p-2")
        .text(eventHour);

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