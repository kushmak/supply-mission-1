function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
speed=random(223,321)
weight=random(30,52)
bullet=createSprite(50,200,50,50)
wall=createSprite(1200,200,thickness,height/2)

}
var bullet,wall,thickness
var weight,speed,bullet
car.velocityX=speed;

thickness=random(22,83)




function draw() {
  background(255,255,255);  
  drawSprites();

  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y
}