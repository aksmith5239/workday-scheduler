$(document).ready(function(){
//create todays date:
m = moment(); // set m as the moment
var currentDay = m.format('dddd, MMMM Do')
$("#currentDay").html(currentDay);

// declare our event as blank object
 appointments = {};

createEvent = function() {
    // this is where we will add the event div into the li

}
//create the information that will go into events object

loadEvent = function() {
    // this is where we load the event into local storage

    //--- remove as comment when ready
    appointments = JSON.parse(localStorage.getItem("appointments"));  
    // ---------------------------------
    //if nothing in local storage then we create a new object to track array
    if(!appointments) {
        appointments = {
            appointments: []
        };
    }
    //loop over object properties
    $.each(appointments, function(arr) {
        arr.forEach(function(appointment){
            createAppointment(appointments.text);
        });
    });
};



saveAppointments = function() {
    // here is where we save to local storage

     //--- remove as comment when ready
    localStorage.setItem("appointments", JSON.stringify(appointments));  
    // ---------------------------------
}


//target the event
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

$(".list-group-item").on("blur", "textarea", function(){
    // get the current value of the textarea
    var text = $(this)
        .val()
        .trim()
    // get the id
    var id = $(this).closest('li').attr('id');
    var date = $(this).closest('div')
        .text()
        .trim();
    console.log(date);
    console.log(id);
    
    // pushes items just created into a tempArr
    var tempArr = [];
    tempArr.push({
        text: text,
        id: id
    });
    console.log(tempArr);
    saveAppointments();
});
























}); //end document ready
