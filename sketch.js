let Shamblers = [];
function setup() {
  createCanvas(450, 450);

  for (let i = 0; i < 90; i++) {
    Shamblers.push(new Mover());
  }
}

function draw() {
  background(0, 0, 0);
  
  for (let i = 0; i < Shamblers.length; i++) {
    Shamblers[i].motion();
    Shamblers[i].tampil();
    Shamblers[i].limit();
  }
}


class Mover {
  constructor(){
    this.location = createVector(random(width),random(height));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
  
  }
  
  tampil(){
    stroke(145, 5, 0);
    fill(random(43),180,254);
    
    ellipse(this.location.x, this.location.y,20,20, radians(180),radians(270));
    
  }
  
  motion(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 7;
    
    arahMouse.normalize();
    arahMouse.mult(1); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  end(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  limit(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}