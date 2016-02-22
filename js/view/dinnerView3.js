var DinnerView3 = function (container,model) {

	this.container=container;
	this.starter = (model.getAllDishes('starter'));
	this.main = (model.getAllDishes('main dish'));
	this.dessert = (model.getAllDishes('dessert'));


	this.allTheDish=container.find("#allDishes");

	
		for (var i = 0; i < this.starter.length; i++){
			this.allTheDish.append(
			"<div class="+'"'+"col-md-3 dishtype starter"+'"'+"id="+'"'+this.starter[i].name+'"'+"style="+'"'+"display:block"+'"'+">"
			+"<img src="+'"'+"images/"+this.starter[i].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h4 id="+'"'+"title"+'"'+">"+this.starter[i].name+"</h4>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.starter[i].description.slice(0,80)+"..."+"</p>"+"</div>"
			+"</div>");
				
};

		for (var i = 0; i < this.main.length; i++){
			this.allTheDish.append(
			"<div class="+'"'+"col-md-3 dishtype main"+'"'+"id="+'"'+this.main[i].name+'"'+"style="+'"'+"display:block"+'"'+">"
			+"<img src="+'"'+"images/"+this.main[i].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h4 id="+'"'+"title"+'"'+">"+this.main[i].name+"</h4>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.main[i].description.slice(0,80)+"..."+"</p>"+"</div>"
			+"</div>");
				
};

		for (var i = 0; i < this.dessert.length; i++){
			this.allTheDish.append(
			"<div class="+'"'+"col-md-3 dishtype dessert"+'"'+"id="+'"'+this.dessert[i].name+'"'+"style="+'"'+"display:block"+'"'+">"
			+"<img src="+'"'+"images/"+this.dessert[i].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h4 id="+'"'+"title"+'"'+">"+this.dessert[i].name+"</h4>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.dessert[i].description.slice(0,80)+"..."+"</p>"+"</div>"
			+"</div>");
				
};
	
	this.whatDishToDisplay= function(someDishType){
		if(someDishType){
			for (var i = 0; i < document.getElementsByClassName("dishtype").length; i++) {
				document.getElementsByClassName("dishtype")[i].style.display = 'none';}	

			for(var i = 0; i < document.getElementsByClassName(someDishType).length; i++){
			document.getElementsByClassName(someDishType)[i].style.display = 'block';}
		}

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











