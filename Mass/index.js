var m;



function setup() {
  	createCanvas(900, 900);
  	m = new Mass;

    
  	

}

function draw(){
	m.draw();

	if (mouseIsPressed == false){
		m.updatePosition();
	}
	if (keyIsPressed == true){

         randomColor = color(random(255), random (255), random(255));
         fill(randomColor);
    }
             
}

document.addEventListener("DOMContentLoaded", function(){

    var s = document.getElementById("shapes");

    function changeShapes(event){

	let shapes = document.getElementById("shapes").value;

	m.setShapes(shapes);

    }

    

    s.addEventListener("change", changeShapes);



    var sf = document.getElementById("shapes_form");



    sf.addEventListener("submit", function (event){

	event.preventDefault()});

});
