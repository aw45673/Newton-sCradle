class String{
    constructor(bodyA, bodyB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5,
            length: 300
        }
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
            var pointA = this.string.bodyA.position;
            var pointB = this.string.bodyB.position;
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
    }
    
}