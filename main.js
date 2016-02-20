 var ideas = new Array("Fitness Tracker", "Blog", "Portfolio", "Stop Watch",
 "To-Do List", "Movie App", "Weather App", "Tick-Tac-Toe Game", "Calendar",
 "Reddit Clone", "Clock", "RSS Feed Reader", "Unit Converter", "Quiz App" );

 function GetIdea() {
     //Makes the array list items random
     var random = ideas[Math.floor(Math.random() * ideas.length)];
     //Puts the array list item into the DOM
     document.getElementById("message").innerHTML=random;
 }

    //open modal after X seconds
    setTimeout(function() {
        $('.digOceanOverlay').addClass('is-open');
    }, 15000);
function CloseModal() {
    //close modal on btn click
    $('.digOceanOverlay').removeClass('is-open');
}
