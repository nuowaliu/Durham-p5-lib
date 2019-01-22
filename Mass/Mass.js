var totalObjects = 20, 
masses = [],  
maxV = 0.01;

class Mass {       
  constructor(x, y, xvel, yvel, shapes) {
    this.x = x ;
    this.y = y ;
    this.xvel = xvel;
    this.yvel = yvel;
    this.shapes = shapes || rect 
    this.mass = 0.001;
    this.radius = 20;
  }


  setShapes(){
    this.shapes=shapes;
  }


  draw() {
    background(100);       

    for(let i = 0; i <=totalObjects; i++){
      masses.push(new Mass(random(0, width), random(0, height), random(-maxV, maxV), random(-maxV, maxV)));
      this.shapes(masses[i].x, masses[i].y, masses[i].radius, masses[i].radius);

    } 
  }

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


