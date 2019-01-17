#Documentation
##Outlilne:
This documentation explains how these three files work in one HTML page and what is the meaning of each line of code. The final presentation on the HTML page will be 20 objects starting from random positions moving randomly on the screen that is set.

##Mass.js
The first file is the file named _Mass.js_. It is a class that contains all the **properties**(the x-position, y-position, velocity, mass and so on) and **effects**(the movement)that each obejct must include. The `constructor` **function** controls the properties and **function** setShapes(), draw(), updatePosition() contains the effects that the objects should present on the HTML page.

**Here are the codes from _Mass.js_**:

```
var totalObjects = 20, 
masses = [],  
maxV = 0.01;
```
Global varaibles are defined.

**Variable**:

* `totalObjects = 20`, the number of objects that is going to create is 20.
* `masses = []`, the obejct property will be arranged into this **array**.
* `maxV = 0.01`, the maximum velocity of the obejcts is 0.01.

```
class Mass {       
  constructor(x, y, xvel, yvel, shapes, mass, radius) {
    this.x = x ;
    this.y = y ;
    this.xvel = xvel;
    this.yvel = yvel;
    this.shapes = shapes || rect
    this.mass = 0.001;
    this.radius = 20;
  }

```
The first function that should be place on the top of the class is the `constructor`, the parameters of this function defines the properties that the obejct should have, for example `x` is the x-axis value and `y` is the y-axis value, `xvel` is the velocity in x-axis direction nad  `shapes` `mass``radius`are the shape,mass and radius of the obejcts. However, the `x` or `y` or `xvel` inside **class** are not global variable but local variabel that can only be use in this class but not the outter section, therefore `this.` should be added infront to define the scope that these parameters can appear in.

```
  setShapes(){
    this.shapes=shapes;
  }

```
`setShapes()` is a function that defines to change the shape of the obejct, it links to the other function in file _index.js__

```
  draw() {
    background(100);       

    for(let i = 0; i < totalObjects; i++){
      masses.push(new Mass(random(0, width), random(0, height), random(-maxV, maxV), random(-maxV, maxV)));
      this.shapes(masses[i].x, masses[i].y, masses[i].radius, masses[i].radius);

    } 
  }
```
`draw()` is a function includes all the things that should appear on the HTML page including the backgroudnd color (set by `background()`) and the position of the obejcts should appear at the beginning and a function that should define the movement of the obejcts.

The `for` loop inside defines the static position of the obejcts.


* **Loop** `for()`: 
	* It allows to add new elements to **array** 		`masses`.
	* It will loop until the conditions cannot be met.
	* conditions of the loop:
		1. set `i` as a variable.
		2. when `i` smaller than variable `totalObject`.
		3. `i` increase by 1 after each loop until it is larger than `totalObject` and break from the loop.
	* code inside the loop:
	* `masses.push(new Mass(random(0, width), random(0,height), random(-maxV, maxV), random(-maxV, maxV)));` add a new element to the **array** `masses` with properties of random x-axis, y axis, random velocity of the objects in x-axis direction and random velocity in y-axis direction.

```
  updatePosition() {

    for(let i = 0; i < totalObjects; i++) {
      let x1 = masses[i].x;
      let y1 = masses[i].y;
      for(let j = 0; j < totalObjects; j++) {
        if(j != i) {
          let x2 = masses[j].x;
          let y2 = masses[j].y;
          let d = dist(x1, x2, y1, y2);
         	masses[i].xvel += (x2 - x1)/d * masses[j].mass;
          masses[i].yvel += (y2 - y1)/d * masses[j].mass;
        }
      }
      masses[i].x += masses[i].xvel;  
      masses[i].y += masses[i].yvel;  
    }
  }
}
```
* **Function** `updatePosition()` is to make the obejcts move on the screen by keeping changing their positions constantly.
	* The first `for()` **loop** defines two variables as the x-axis and y axis separately :
		* variable `x2` = `masses[i].x`
		* variable `y2` = `masses[i].y`
		* conditions of the loop:
			* variable `i` is set to be zero
			* when `i` smaller than `totalObjects`
			* `i` increase by 1 after each **loop**
	* The second `for` **loop** is inside the first `for` **loop**, it sets another 2 variables as x-axis position and y-axis position with the similar condictions by changing i to j. 
		* The two **variable** x2 and y2 inside the `if()` **function** defines the last position of the object after they move.
		* The **variable** d =`dist(x1, x2, y1, y2)` is to calculate the _distance_ between 2 points.
		* The moving _velocity_ of the objects the in x-aixs`masses[i].xvel` and y-axis direction`masses[i].yvel` is redefined to be `(x2 - x1)/d * masses[j].mass` and `(y2 - y1)/d * masses[j].mass`. 
		* The new x and y position of the objects are defined as `masses[i].x += masses[i].xvel` and `masses[i].y += masses[i].yvel` which is the original position plus new velocity of the object.

##index.js
```
var m;
function setup() {
  	createCanvas(900, 900);
  	m = new Mass;
}
```
`var m` defines a global variable m.

**Function** `setup()`:

* `createCanvas(900,900)` is to create a canva with 900 pixels in width and 900 pixels in height.
* `m = new Mass` means that a **class** `Mass{}` including all its **functionality* is create in this _.js_ file and the **function** can be called in this file by just adding `m.`in the front, for example `updatePosition()` has to be `m.updatePosition()` in this file.

```
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
```
**function** `draw()`:

* called the function `draw()` in **class** `Mass{}` to create the obejcts.
* The two `if` function adds more events to this objects:
* `if (mouseIsPressed == false){
		m.updatePosition();
	}` means when user does not press its mouses, then the **function** `m.updatePosition()` is called and the obejct can move, however if mouse is pressed then only `m.draw()` is ran which therefore showing obejects are froze on the screen.
* ```if (keyIsPressed == true)}``` defines that when any key on keyborad is preessed, then the color of the obejct will change randomly(defines by the `random()` inside `randomColor()`).

```
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
```
`document.addEventListener("DOMContentLoaded", function(){}` is a **function** to create an event called `form`:

* `var s = document.getElementById("shapes");` defines the **element** with `shape` as `id` for the convenience of usage of code below. 
* `function changeShapes(event){}` includes the way to change the value of the `shape` by first take out the `value` of the `shapes` and set the `value` into the function `m.setShapes()` in **class** `Mass{}` 
* The **change** **event** can only happend after the event is defined: `s.addEventListener("change", changeShapes)`and  `"change"` is a js event to make the `change` **event** itself happens. 
* `var sf = document.getElementById("shapes_form");` defines a **variable** `sf` with `elementid` = `shapes_form`.
*  `sf.addEventListener("submit", function (event){}` define the `submit` event by submitting the `form` to make the change.

##Mass.html
```
<script  language="javascript"	type="text/javascript" src="Mass.js"></script>
<script  language="javascript"	type="text/javascript" src="index.js"></script>
```
This two lines of code links the _Mass.js_ file and _index.js_ to the _Mass.html_ file and therefore the code inside this two file can be ran on this _html_ page and therefore it can showthe obejcts appear and move on this page.

```
<form id = "shapes_form">
 	<input id = "shapes"/>
</form>
    
```
The code `form` here create the actually create the `form` box for user to enter value and `<input id='shapes'>` define the input value by linking to the `elemment` with `id` = `shapes`.

