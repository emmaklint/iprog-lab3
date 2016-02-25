var DinnerView2 = function (container,model) {

	var costInfo = function(dish, model) {
		var cost = model.getDishPrice(dish.id);

		var dishName = ('<td width="30%">' + dish.name + '</td>')
		var dishCost = ('<td width="30%">' + cost + ' kr</td>')

		$("#table").append('<tr>' + dishName + dishCost + '</tr>')
	}

	this.update = function(obj) {
		this.guestInput = $("#number");
		this.guestInput.val(model.getNumberOfGuests());

		this.pending = model.pendingDish();
		pendingString = '';

		$("#table").html('<tr><th>Dishname</th><th>Cost</th></tr>');
		$("#totalPrice").html('<p>Total: ' + model.getTotalMenuPrice() + ' kr</p>');

		var menu = model.getFullMenu();

		for (var i = 0; i < menu.length; i++) {
			costInfo(menu[i],model);
		}

		if(this.pending.length !== 0){
			var pendingPrice = model.getDishPrice(this.pending[0].id);
			pendingString += '<tr><td width="30%">Pending</td><td>' + pendingPrice + ' kr</td>'
			$("#table").append(pendingString);
		}

	} 

	this.update();
	model.addObserver(this);
}
