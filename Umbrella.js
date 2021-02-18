class man{
    constructor(x,y,r){
      var options_man = {
        isStatic: true,
        restitution: 0.1,
        friction: 0.5
      }
    
    this.x = x;
    this.y = y;
    this.r = r;

    this.image = loadImage("Walking Frame/walking_1.png");
    

    this.body = Bodies.circle(this.x,this.y,this.r,options_man);
    World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
     push();
     
     translate(pos.x,pos.y);
     rectMode(CENTER);
     strokeWeight(2);
     fill("silver");
     imageMode(CENTER);
     image(this.image,-15,40,420,420);

     pop();
    }
}