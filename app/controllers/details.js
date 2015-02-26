//controllers/detail.js
//this is how we accept arguments passed to the controller (usually from another controller)
var args = arguments[0] || {};

//close the window when the button is clicked
$.closeBtn.addEventListener("click", function(){
	$.detailWindow.close();
});

//instance variable use in data binding to the model
//we do this here to trigger the events
//that will cause the data to be rendered
$.car.set(args.data);

//free the model-view data binding resources when this
//view-controller closes
$.detailWindow.addEventListener("close",function(){
	$.destroy();
});