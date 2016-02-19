var DinnerView3Controller = function(view, model ) {

		view.container.find("#starter").click(function(){
			view.dinnerView3.whatDishToDisplay("starter");
	}
	);
		view.container.find("#main").click(function(){
			view.dinnerView3.whatDishToDisplay("main dish");
	}
	);
		view.container.find("#dessert").click(function(){
			view.dinnerView3.whatDishToDisplay("dessert");
	}
	);
		view.container.find("#all").click( function(){
			view.dinnerView3.whatDishToDisplay();
	}
	);


}