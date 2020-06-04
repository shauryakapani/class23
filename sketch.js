const Engine = Matter.Engine;
 const World= Matter.World; 
 const Bodies = Matter.Bodies; 
 var engine, world; 
 var ground, box;
 var box1;
  function setup()
  { var canvas = createCanvas(400,400);
     engine = Engine.create();
      world = engine.world;
       box = new Box(200,380,50,50); 
       box1 = new Box(230,330,50,50);
ground=new Ground(200,390,400,10);

    }
       function draw()
       { background(0);
         Engine.update(engine);
         box1.display();
         ground.display ();
          box.display(); }
           
    













