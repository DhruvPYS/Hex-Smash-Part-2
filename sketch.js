const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11,
box12, box13, box14, box15, box16
//second tower
var box17, box18, box19, box20, box21, box22, box23, box24, box25
var ground1, ground2, slingshot, polygon, polygon1, polygon2
var engine, world
var cloud1, cloud2, cloud3, cloudImage
function preload()
{
cloudImage = loadImage("cloud.jpg")
polygon2 = loadImage("th.jpg")

}

function setup() {
  createCanvas(800,400);
 engine = Engine.create()
 world = engine.world
polygon1 = createSprite(200,200, 10, 10)
 polygon1.addImage("polygon2", polygon2)
polygon1.scale = 0.3
 cloud1 = createSprite(100, 40, 10, 10)
 cloud1.addImage("cloudImage", cloudImage)
 cloud1.scale = 0.1

 cloud2 = createSprite(400, 40, 10, 10)
 cloud2.addImage("cloudImage", cloudImage)
 cloud2.scale = 0.1
 
 cloud3 = createSprite(700, 40, 10, 10)
 cloud3.addImage("cloudImage", cloudImage)
 cloud3.scale = 0.1
 
 //first ground
 ground1 = new Ground(360, 385, 250,5)

 //second ground 
ground2 = new Ground(640, 250, 200, 5)

//first tower
box1 = new BoxP(270, 365)
box2 = new BoxP(300, 365)
box3 = new BoxP(330, 365)
box4 = new BoxP(360, 365)
box5 = new BoxP(390, 365)
box6 = new BoxP(420, 365)
box7 = new BoxP(450, 365)
//second row
box8 = new BoxG(300, 325)
box9 = new BoxG(330, 325 )
box10 = new BoxG(360, 325 )
box11 = new BoxG(390, 325 )
box12 = new BoxG(420, 325 )
//third row
box13 = new Box(330, 285 )
box14 = new Box(360, 285 )
box15 = new Box(390, 285 )
//fourth row
box16 = new BoxB(360, 245)

//second tower
 box17 = new BoxP(580,235)
 box18 = new BoxP(610,235)
 box19 = new BoxP(640,235)
 box20 = new BoxP(670,235)
 box21 = new BoxP(700,235)
 //second row 
 box22 = new BoxG(610,195)
 box23 = new BoxG(640,195)
 box24 = new BoxG(670,195)
 //third row
 box25 = new Box(640,155)
polygon = Bodies.circle(50,200, 30, {density: 2})

fill ("yellow")

World.add(world, polygon)

slingshot = new Sling(this.polygon, {x:200, y:200})
}

function draw() {

  Engine.update(engine)
  background(135,206,235);  

  box1.display()
  box2.display ()
  box3.display ()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  

  box8.display ()
  box9.display ()
  box10.display ()
  box11.display ()
  box12.display ()
  box13.display ()
  box14.display ()
  box15.display ()
  box16.display ()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()

ground1.display ()
ground2.display ()

slingshot.display ()

ellipse (polygon.position.x, polygon.position.y, 30)

polygon1.x = polygon.position.x
polygon1.y = polygon.position.y

  drawSprites();
}

function mouseDragged ()
{
Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY})
}

function mouseReleased ()
{
slingshot.fly()
}

function keyPressed()
{
  if(keyCode === 32)
  {
  slingshot.attach(this.polygon)
  }
}