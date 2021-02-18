class drop{
  constructor(x,y){
      var options = {
          density: 1,
          friction: 0.001,
          restitution:0.1           
      }
      this.rain = Bodies.circle(x,y,5,options)
      this.radius = 5;
      World.add(world, this.rain);
  }

  updateY(){     
      if(this.rain.position.y > height){

          Matter.Body.setPosition(this.rain, {x:random(0,400), y: -5})
      }
  }

  showDrop(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
  }
}