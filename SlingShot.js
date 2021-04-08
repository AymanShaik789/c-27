class SlingShot{
    constructor(bird, log){
        var options = {
            bodyA : bird, 
            bodyB : log,
            stiffness : 0.4,
            lenght : 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}