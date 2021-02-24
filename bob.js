class Bob
{
    constructor(x,y)
    {
        var options={
            isStatic: false,
            friction:1,
            density:1
        }

        this.body = Matter.Bodies.circle(x,y,25,options);
        this.radius = 50;
        World.add(world,this.body);
      }
    
    display()
    {
      var pos = this.body.position;
      fill("pink");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);
    }
}