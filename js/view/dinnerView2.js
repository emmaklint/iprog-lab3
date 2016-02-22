var DinnerView2 = function (container,model) {

	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	model.addToPending(1);
	this.pending=model.pendingDish();
	
	


	var guests=model.getNumberOfGuests();

	
	this.update=function(){


		this.numberOfGuests.html(model.getNumberOfGuests());
		if(this.pending.length !== 0){

			this.pendingName.html(this.pending[0].name);
			this.pendingPrice.html(model.getPendingPrice()+" SEK"); //MÅSTE FIXAS -  hamna rätt i tabellen.
			
		}

		else{
			this.pendingName.html("Pending");
			this.pendingPrice.html("0.00");
		};

		this.pendingPrice.html((model.getPendingPrice())+" SEK"); 
		this.totalCost.html((model.getTotalMenuPrice()+model.getPendingPrice())+" SEK");
};
	

	this.pendingName = container.find("#dish-name");
	this.pendingPrice = container.find("#dish-cost");
	this.totalCost = container.find("#dinnerCost");
	//this.totalCost.append("<tr><td>Total cost:</td><td id="+'"'+"pendingPrice"+'"'+"></td></tr><td></td>");




	model.addObserver(this);
	this.update();
	

	//this.price.append("Total cost"+ model.getTotalMenuPrice());


};
