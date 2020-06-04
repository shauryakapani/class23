class Box { constructor(x,y,width,height) 
    { var options = { restitution: 1.0 } 
    this.body = Bodies.rectangle(x,y,width,height,options);               
 World.add(world,this.body);
 }
  display()
   { var angle=this.body.angle;
    push ();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);

       rectMode(CENTER); 
    fill(255); 
    rect(0,0,50,50); 
     pop ();
} }
