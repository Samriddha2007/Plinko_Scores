//var particles = [];
var plinkos = [];
var divisions = [];
var particles,particles1,particles2,particles3;

var turn = 5;
var gameState = "PLAY";



const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var ground;
var divisionHeight=300;
var score = 0;

function setup() {
  var canvas = createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  particles = new Particle(random(150,750), 10,10);
  particles1 =  new Particle1(random(150,750), 10,10);
  particles2 =  new Particle1(random(150,750), 10,10);
  particles3 =  new Particle1(random(150,750), 10,10);
  particles4 =  new Particle1(random(150,750), 10,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }   
}
 


function draw() {
  background("black");
  

  Engine.update(engine);

  textSize(25);

  
  text("Score : "+score,20,30);
  text("Turn : "+turn,190,30);
  if(turn <= 0)
  {
    turn = 0;
  }

  fill("red");
  text("500",25,500);
  text("500",105,500);
  text("500",185,500);
  text("500",265,500);
  text("100",345,500);
  text("100",425,500);
  text("300",505,500);
  text("300",585,500);
  text("300",665,500);
  text("300",745,500);
  

  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(gameState == "PLAY")
   {


      particles.display();

     if(particles.body.position.y > 600)
     {

      turn = turn - 1;
       if(particles.body.position.x < 300)
       {
         score = score + 500;
         particles = null;
         gameState = "MIDDLE";
        }
       else if(particles.body.position.x > 301 && particles.body.position.x < 450)
       {
         score = score + 100;
         particles = null;
         gameState = "MIDDLE";
        }
        else
        {
          score = score + 300;
          particles = null;
          gameState = "MIDDLE";
         }
     }     
   }
   else
   {

   }

   
 
  
   if(gameState == "MIDDLE")
   {
      if(turn <= 0)
      {
        gameState = "END";
      }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   console.log(gameState);
   console.log(particles1);

   if(turn == 4)
   {
     Matter.Body.setStatic(particles1.body,false);
     particles1.display();
     if(particles1.body.position.y > 600)
     {

      turn = turn - 1;
       if(particles1.body.position.x < 300)
       {
         score = score + 500;
         particles1 = null;
         gameState = "MIDDLE";
        }
       else if(particles1.body.position.x > 301 && particles1.body.position.x < 450)
       {
         score = score + 100;
         particles1 = null;
         gameState = "MIDDLE";
        }
        else
        {
          score = score + 300;
          particles1 = null;
          gameState = "MIDDLE";
         }
     }
   }

   if(turn == 3)
   {
    Matter.Body.setStatic(particles2.body,false);
    particles2.display();
    if(particles2.body.position.y > 600)
    {

     turn = turn - 1;
      if(particles2.body.position.x < 300)
      {
        score = score + 500;
        particles2 = null;
        gameState = "MIDDLE";
       }
      else if(particles2.body.position.x > 301 && particles2.body.position.x < 450)
      {
        score = score + 100;
        particles2 = null;
        gameState = "MIDDLE";
       }
       else
       {
         score = score + 300;
         particles2 = null;
         gameState = "MIDDLE";
        }
    }
   }
   if(turn == 2)
   {
    Matter.Body.setStatic(particles3.body,false);
    particles3.display();
    if(particles3.body.position.y > 600)
    {

     turn = turn - 1;
      if(particles3.body.position.x < 300)
      {
        score = score + 500;
        particles3 = null;
        gameState = "MIDDLE";
       }
      else if(particles3.body.position.x > 301 && particles3.body.position.x < 450)
      {
        score = score + 100;
        particles3 = null;
        gameState = "MIDDLE";
       }
       else
       {
         score = score + 300;
         particles3 = null;
         gameState = "MIDDLE";
        }
    }
   }
   if(turn == 1)
   {
    Matter.Body.setStatic(particles4.body,false);
    particles4.display();
    if(particles4.body.position.y > 600)
    {

     turn = turn - 1;
      if(particles4.body.position.x < 300)
      {
        score = score + 500;
        particles4 = null;
        gameState = "MIDDLE";
       }
      else if(particles4.body.position.x > 301 && particles4.body.position.x < 450)
      {
        score = score + 100;
        particles4 = null;
        gameState = "MIDDLE";
       }
       else
       {
         score = score + 300;
         particles4 = null;
         gameState = "MIDDLE";
        }
    }
   }
   if(turn <= 0)
   {
     gameState == "END";
   }
   if(gameState == "END")
   {
      
   textSize(100);
   fill("green");
   text("GAMEOVER",100,300);
   }


  }