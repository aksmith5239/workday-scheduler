$(document).ready(function(){
//create todays date:
m = moment(); // set m as the moment
var currentDay = m.format('dddd, MMMM Do')
$("#currentDay").html(currentDay);
mTime = moment().format('hA');

let start = moment().startOf('day');
let time1 = moment().startOf('day').add(8, 'hours').format('hA');
let time2 = moment().startOf('day').add(9, 'hours').format('hA');
let time3 = moment().startOf('day').add(10, 'hours').format('hA');
let time4 = moment().startOf('day').add(11, 'hours').format('hA');
let time5 = moment().startOf('day').add(12, 'hours').format('hA');
let time6 = moment().startOf('day').add(13, 'hours').format('hA');
let time7 = moment().startOf('day').add(14, 'hours').format('hA');
let time8 = moment().startOf('day').add(15, 'hours').format('hA');
let time9 = moment().startOf('day').add(16, 'hours').format('hA');
let time10 = moment().startOf('day').add(17, 'hours').format('hA');

// declare our appointment as blank array
 
var appointments =[];
var tempArr = [];
 $('#time-1').append(time1);
 $('#time-2').append(time2);
 $('#time-3').append(time3);
 $('#time-4').append(time4);
 $('#time-5').append(time5);
 $('#time-6').append(time6);
 $('#time-7').append(time7);
 $('#time-8').append(time8);
 $('#time-9').append(time9);
 $('#time-10').append(time10);

// need to change cases of appointment div based on time of day
// I have tried to change the case based on the value that time1 is > < = mTime but cannot affect the proper div
//create the information that will go into events object

var loadAppointments = function() {
    // this is where we load the value of tempArr into local storage
    appointments.push(JSON.parse(localStorage.getItem('appointment'))); 
    // ---------------------------------
//    //loop over the object properties
for (var i = 0; i < appointments.length; i++) {
    // append to html here
    // I have tried various things but cannot find a way to append the appointment to the proper div
    }
    console.log(appointments);
};

var saveAppointments = function() {
    // here is where we save value of tempArr to local storage
     //--- remove as comment when ready
    localStorage.setItem("appointment", JSON.stringify(tempArr));  
    
    // ---------------------------------
}

$(".list-group-item").on("click", "p", function() {
    // add content to the event block
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");   
});
//enter values into a text area 
$(".list-group-item").on("blur", "textarea", function(){
    // get the current value of the textarea
    var text = $(this)
        .val()
        .trim()
    // get the id
    var id = $(this).closest('li').attr('id');
    
    // push values into tempArr
    tempArr.push({
        appointment: text,
        apptId: id    
    });
     //recreate the p element
     var apptP = $("<p>")
     .addClass("text-left")
     .text(text);
     //replace the text element with this paragraph
     $(this).replaceWith(apptP); 
});
// need to chage text area back to p

//
$(".list-group-item").on("click", "span", function() {
    //when button clicked, vlaue of tempArr saved to saveAppointments
    // console.log(tempArr);
    saveAppointments();
});

loadAppointments();
}); //end document ready
