class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness: 0.2,
            length:20
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    
    display(){
        var pa = this.sling.bodyA.position;
        var pb = this.sling.bodyB.position;
        stroke("brown");
        strokeWeight(5);
        line(pa.x,pa.y,pb.x,pb.y);
    }
    
}