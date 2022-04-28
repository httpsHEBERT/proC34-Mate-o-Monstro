// ◯╔╗═◯╔═╗◯╔╦╗◯╔═╗◯
// ◯║╚╗◯║║║◯║║║◯║╩╣◯
// ◯╚═╝◯╚═╝◯╚═╝◯╚═╝◯

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero, monster, rope, ground, music;
var boxA1, boxB1, boxC1, boxD1, boxE1, boxA2, boxB2, boxC2, boxD2, boxE2,
boxA3, boxB3, boxC3, boxD3, boxE3, boxB4; 

function preload(){
  bg = loadImage("Images/sky.png");
  music = loadSound("Sounds/SupermanTheme.mp3");
}

function setup(){

  createCanvas(1366, 657);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 675, 1200, 200);

  hero = new Hero(300, 800, 250);
  monster = new Monster(1050, 550, 300, 350);
  rope = new Rope(hero.body, {x: 300, y: 50 });

  boxA1 = new Box(600, 550, 90, 70);
  boxB1 = new Box(700, 550, 90, 70);
  boxC1 = new Box(800, 550, 90, 70);
  boxD1 = new Box(640, 470, 90, 70);
  boxE1 = new Box(760, 470, 90, 70);
  boxA2 = new Box(600, 400, 90, 70);
  boxB2 = new Box(700, 400, 90, 70);
  boxC2 = new Box(800, 400, 90, 70);
  boxD2 = new Box(640, 350, 90, 70);
  boxE2 = new Box(760, 350, 90, 70);
  boxA3 = new Box(600, 270, 90, 70);
  boxB3 = new Box(700, 270, 90, 70);
  boxC3 = new Box(800, 270, 90, 70);
  boxD3 = new Box(640, 200, 90, 70);
  boxE3 = new Box(760, 200, 90, 70);
  boxB4 = new Box(700, 130, 90, 70);

  music.setVolume(0.1);
  music.loop();
}

function draw(){

  background(bg);
  Engine.update(engine);

 display();
}

function display(){

  monster.display();
  ground.display();
  hero.display();
  rope.display();

  boxA1.display();
  boxB1.display();
  boxC1.display();
  boxD1.display();
  boxE1.display();
  boxA2.display();
  boxB2.display();
  boxC2.display();
  boxD2.display();
  boxE2.display();
  boxA3.display();
  boxB3.display();
  boxC3.display();
  boxD3.display();
  boxE3.display();
  boxB4.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
