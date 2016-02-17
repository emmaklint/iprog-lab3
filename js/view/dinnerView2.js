var DinnerView2 = function (container,model) {

	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menuDish = container.find("#menu-dish");
	this.price = container.find("#dinnerCost");

	//this.pending=NÅN FUNKTION I MODEL?

	var guests=model.getNumberOfGuests();
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.price.append("Total cost"+ model.getTotalMenuPrice());


}
