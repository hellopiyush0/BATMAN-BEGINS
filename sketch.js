const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var rain=[];
var man1;
var body1;
var thunder;
var maxDrops = 100;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(450, 600);
	engine = Engine.create();
	world = engine.world;
    if(frameCount % 150 === 0){

        for(var i = 0; i<maxDrops; i++){
           rain.push(new drop(random(0,400), random(0,400)));
        }

    }

    
     man1 = new man(225,380,125);
     
}
   

function draw(){
    background(0);

    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++){
       rain[i].showDrop();
        rain[i].updateY()
        
    }

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370, random(10,30), 10,10));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        thunder.lifetime = 10;
    }

    drawSprites();
    man1.display();

}   
