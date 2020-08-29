//start jquery
$(document).ready(function() {
//goal - create a schedule using a daily planner

//open planner  - current day is displayed at top of calendar
m = moment(); // set m as the moment
var currentDay = m.format('dddd, MMMM Do')
$("#currentDay").html(currentDay);
// to create time blocks we need to set a variable equal to 12:00 am on the current day
var start = m.startOf('day');
var startTime = moment();
startTime.hour(8);
console.log(startTime);
var hoursPerSchedule = 24;
var time = [];
function timeOneSchedule() {

    

var formatedTime;
for(i=0; i < hoursPerSchedule; i++) {
    formattedTime = (moment().subtract(i, "hours")).format("hA");
    time.unshift(formattedTime);
    }   
}
timeOneSchedule();
console.log(time);


//set variable for each time block with 12:01 plus how many hours ???

//variables we need to create:
// var eventHour = "";
// var eventText = "";
// var eventDate = "";
// scroll down to time blocks for standard business hours

// view time blocks - each time block color coded to denote past, present future

// click into time block and enter event
var createEvent = (function(eventHour, eventText) {
    var eventLi = $("<li>").addClass("list-group-item d-flex ui-state-default mt-0 p-0");
    var eventHourDiv = $("<div>").addClass("col text-left hour p-2");
    var eventDiv = $("<div>").addClass("col-10 text-left row p-2 future");
    var eventTextP = $("<p>").addClass("text-left");
        
    var eventSaveDiv = $("<div>").addClass("col text-right p-2 saveBtn");
    var eventSaveSpan = $("<span>").addClass("oi oi-calendar d-flex justify-content-center m-4");
    
    //append p inside div for event div
    $("<p>").appendTo(".eventDiv");
    //append span inside save div
    $("<span>").appendTo(".eventSaveDiv");

    //append divs to to parent li
    eventLi.append(eventHourDiv, eventDiv, eventSaveDiv);

    //append to ul on the page
    $("#list-schedule").append(eventLi);
    console.log(eventLi);
});

createEvent();

//load the event onto the page
var loadEvent = (function(){
    // load event functionality here
   });

// click save button to save event to local storage
var saveEvent = (function(){
    //save event code here
});



// use this object as example when configuring to save to local storage
const jsonObj = {
    momentObj: m
}
console.log(JSON.stringify(jsonObj));
// 

}); //end document.ready;