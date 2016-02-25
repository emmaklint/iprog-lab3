var DinnerView3 = function (container,model) {

	var dishInfo = function(dish, model) {
		var dishImg = ('<img src="images/' + (dish.image) + '"/>');
		var dishName = ('<h4>' + dish.name + '</h4>');
		var dishDesc = ("<p>" + dish.description.slice(0,85) + "..."+"</p>");

		$(".right-content-3").append('<div class="clickDish col-md-4" id="' + dish.id + '">' + dishImg + dishName + dishDesc + '</div>')
	}
	
	
	this.getDishes = function(type, filter) {
		var allDishes = model.getAllDishes(type, filter);

		for (var i = 0; i < allDishes.length; i++) {
			dishInfo(allDishes[i]);
		}
	}

<<<<<<< HEAD
	this.updateSearch = function(type, filter) {
		$(".right-content-3").empty();
		this.getDishes(type, filter);
	} 

	this.getDishes($("#typeSelect").val());
	
=======
		else{
		for(var i = 0; i< document.getElementsByClassName("dishtype").length; i++){
			document.getElementsByClassName("dishtype")[i].style.display = 'block';}
		}
	};

	this.searchDishes = function(filter){
	var dishTypes = ["starter", "main dish", "dessert"];

	var storeDishes = [];
	for(var i=0, x=document.getElementsByClassName("dishtype").length;i<x;i++){
		document.getElementsByClassName("dishtype")[i].style.display = 'none';}
	
	for (type in dishTypes){
	var result = model.getAllDishes(dishTypes[type], filter);
		for(var j=0, y=result.length;j<y;j++){
		for(var i=0, x=document.getElementsByClassName(dishTypes[type]).length;i<x;i++){
			if(document.getElementsByClassName(dishTypes[type])[i].id == result[j].name){
			storeDishes.push(document.getElementsByClassName(dishTypes[type])[i]);
			}
		}
	}
	}
	for(var k=0, z=storeDishes.length;k<z;k++){
		storeDishes[k].style.display = 'block';
	};


}
};







>>>>>>> 33fae255bea8854cb570b58635beb669edbe59de

}



