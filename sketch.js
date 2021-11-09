const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  var options = {
    isStatics:true
  }
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  playerBase=Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase)
  //create player body
  player=Bodies.rectangle(250,playerBase.position.y-160,50,150,options);
  World.add(world,player);

 /* playerArcher=Bodies.rectangle(210,460,20,20, options);
  World.add(world,playerArcher);*/
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  //show the player image using image() function
  image(baseimage,playerBase.position.x,playerBase.positon.y,180,150)
  //show the playerbase image using image() function
  image(playerimage,player.position.x,Base.positon.y,50,180)

 //showing archer image 

 
 

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
