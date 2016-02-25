var DinnerView2 = function (container,model) {

	var costInfo = function(dish, model) {
		var cost = model.getDishPrice(dish.id);

		var dishName = ('<td width="30%">' + dish.name + '</td>')
		var dishCost = ('<td width="30%">' + cost + ' kr' + '</td>')

		$("#table").append('<tr>' + dishName + dishCost + '</tr>')
	}

	this.update = function(obj) {
		this.guestInput = container.find("#number");

		this.guestInput.val(model.getNumberOfGuests());

		$("#table").html('<tr><th>Dishname</th><th>Cost</th></tr>');
		$("#totalPrice").html('<p>Total: ' + model.getTotalMenuPrice() + ' kr</p>');

		var menu = model.getFullMenu();

		for (var i = 0; i < menu.length; i++) {
			costInfo(menu[i],model);
		}
	} 

	this.update();
	model.addObserver(this);
}
