const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  

    box1=new Box(100,350,20,60);
    box2=new Box(300,350,50,10);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();

}