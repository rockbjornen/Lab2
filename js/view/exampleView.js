//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	var counter = 0;

this.plusButton.click(function(){

    document.getElementById("demo").innerHTML = counter++;

});

	this.numberOfGuests.html(counter);
	
}
 
