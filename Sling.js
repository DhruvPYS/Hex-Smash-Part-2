class Sling {


constructor(bA, pB)
    {
this.sling =  Constraint.create( {bodyA: bA, pointB: pB, 
    stiffness: 0.05, length: 10, friction: 0.001 } )

World.add(engine.world, this.sling)

    }

display()
    {
        fill ("red")
        push ()
        strokeWeight(4)
 pop ()
  if(this.sling.bodyA) {
    

  


line (this.sling.bodyA.position.x, this.sling.bodyA.position.y,
    this.sling.pointB.x, this.sling.pointB.y)

                        }
    }

fly ()
{
this.sling.bodyA = null
}

attach (polygon0)
{
this.sling.bodyA = polygon0
}
}