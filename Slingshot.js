class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,62,25,160);
        image(this.sling2,182,52,25,100);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            stroke (50,23,8);
            if(pointA.x<220)  {
                line(pointA.x -22, pointA.y, pointB.x-10,pointB.y);
                line(pointA.x -22, pointA.y, pointB.x +20,pointB.y+4);

                image(this.sling3,pointA.x-22,pointA.y-10,10,25);
            
            }
            else if (pointA.x>220)
             { line(pointA.x +22, pointA.y, pointB.x-10,pointB.y);
                line(pointA.x +22, pointA.y, pointB.x +20,pointB.y+4);

                image(this.sling3,pointA.x+22,pointA.y-10,10,25);
                

            }
            pop();
        }
    }
    
}