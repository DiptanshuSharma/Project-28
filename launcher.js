class launcher {
    constructor(bodyA, pointB) {
        var options = {
            length: 10,
            stiffness: 0.04,
            bodyA: bodyA,
            pointB: pointB,
        }
        this.launcher = Constraint.create(options)
        World.add(world, this.launcher)
        this.pointB=pointB
    }

    fly(){
        this.launcher.bodyA=null
    }

    display() {
        if(this.launcher.bodyA!=null){
            var pointA = this.launcher.bodyA.position
            var pointB = this.pointB
            strokeWeight(4)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
       
    }


}