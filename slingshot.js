class slingShot{
    constructor(bodyA,pointB){
    var options= {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:20
    }
    }
    this.pointB=pointB
    this.sling=constraint.create(options);
    world.add(world,this.sling);
}

fly(){
    this.sling.bodyA=null;
}

display(){

}
