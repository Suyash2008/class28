class Slingshot{
    constructor(bodyA,pointB)
    {
        var option = {
            bodyA:bodyA,pointB:pointB,
            stiffness : 0.04,
            length : 10

        }
        this.pointB = pointB
        this.chain = Matter.Constraint.create(option)
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
        var pa = this.chain.bodyA.position
        var pb =  this.pointB
        stroke("brown");
        line(pa.x,pa.y,pb.x,pb.y)
        }
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
      this.chain.bodyA = body;  
    }
}