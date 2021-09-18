const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var button  ,blower;                            
function setup() {
  createCanvas(800,400);
  
  createSprite(400, 200, 50, 50);
   blower = new Blower(350,200,10,20)
  button = createButton("click to blow")
  button.position(width / 2, height - 100)
  button.class("blowButton")
  button.mousePressed(blow);

 
  rectMode(CENTER);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  ground.display()

}

function blow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:0.03})

}