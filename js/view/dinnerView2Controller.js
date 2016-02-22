var DinnerView2Controller = function(view, model ) {
 
	 view.plusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });
	 
	 view.minusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });	 

	// view.container.find("#confirm").click(function(){

	 //	view.display("")

	 //})
};