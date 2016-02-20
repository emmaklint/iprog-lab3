var DinnerView3Controller = function(view, model ) {

	 view.container.find("#starter").click(function(){
	 	view.whatDishToDisplay("starter");
	 })
	 
		view.container.find("#main").click(function(){
			view.whatDishToDisplay("main");
	}
	);
		view.container.find("#dessert").click(function(){
			view.whatDishToDisplay("dessert");
	}
	);
		view.container.find("#all").click( function(){
			view.whatDishToDisplay();
	}
	);



};