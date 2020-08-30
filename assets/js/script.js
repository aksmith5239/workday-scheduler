$(document).ready(function(){
//create todays date:
m = moment(); // set m as the moment
var currentDay = m.format('dddd, MMMM Do')
$("#currentDay").html(currentDay);
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


const timeBlock = [time1, time2, time3, time4, time5, time6, time7, time8, time9, time10];
console.log(timeBlock);

// declare our event as blank object
 appointments = {};
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
// var createAppointment = function() {
//     // this is where we will add the event div into the li

// };
//create the information that will go into events object

var loadAppointment = function() {
    // this is where we load the value of tempArr into local storage

    //--- remove as comment when ready
    appointments = JSON.parse(localStorage.getItem("appointments"));  
    // ---------------------------------
    //if nothing in local storage then we create a new object to track array
    // if(!appointments) {
    //     appointments = {
    //         appointments: []
    //     };
    // }
    // //loop over object properties
    // $.each(appointments, function(arr) {
    //     arr.forEach(function(appointment){
    //         createAppointment(appointments.text);
    //     });
    // });
};


var saveAppointments = function() {
    // here is where we save value of tempArr to local storage

     //--- remove as comment when ready
    localStorage.setItem("appointment: ", JSON.stringify(appointments));  
    // ---------------------------------
}

//target the appointment
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
        text: text,
        id: id    
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
    console.log(tempArr);
    saveAppointments();
});



// need to get time into the array
// need to checnge cases of appointment div based on time of day
// need to create saveAppointment and loadAppointment to get and set into localStorage





















}); //end document ready
