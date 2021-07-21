class BoxP {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.visiblity = 255
        World.add(world, this.body);
      }
      display()

      {
        {
          if(this.body.speed<3)
          {
            push();
            fill ("pink")
            translate(this.body.position.x, this.body.position.y);
    
            rotate (this.body.angle)
    
            rectMode(CENTER)
    
            rect( 0, 0, 30, 40);
            pop();
          }
          else {
            World.remove(world,this.body)
            push()
            this.visibility - 1
            tint (255, this.visibility)
            pop()
          }
          
  
          
        }
        
      }
}