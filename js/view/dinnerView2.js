var DinnerView2 = function (container,model) {

<<<<<<< HEAD
	var costInfo = function(dish, model) {
		var cost = model.getDishPrice(dish.id);

		var dishName = ('<td width="30%">' + dish.name + '</td>')
		var dishCost = ('<td width="30%">' + cost + ' kr' + '</td>')
=======
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	model.addToPending(1);
	this.pending=model.pendingDish();
	
	
>>>>>>> 33fae255bea8854cb570b58635beb669edbe59de

		$("#table").append('<tr>' + dishName + dishCost + '</tr>')
	}

	this.update = function(obj) {
		this.guestInput = container.find("#number");

		this.guestInput.val(model.getNumberOfGuests());

		$("#table").html('<tr><th>Dishname</th><th>Cost</th></tr>');
		$("#totalPrice").html('<p>Total: ' + model.getTotalMenuPrice() + ' kr</p>');

<<<<<<< HEAD
		var menu = model.getFullMenu();

		for (var i = 0; i < menu.length; i++) {
			costInfo(menu[i],model);
=======
		this.numberOfGuests.html(model.getNumberOfGuests());
		if(this.pending.length !== 0){

			this.pendingName.html(this.pending[0].name);
			this.pendingPrice.html(model.getPendingPrice()+" SEK"); //MÅSTE FIXAS -  hamna rätt i tabellen.
			
>>>>>>> 33fae255bea8854cb570b58635beb669edbe59de
		}
	} 

<<<<<<< HEAD
	this.update();
	model.addObserver(this);
}
=======
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
>>>>>>> 33fae255bea8854cb570b58635beb669edbe59de
