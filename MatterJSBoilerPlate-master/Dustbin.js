class dustbin {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 150;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true});
        
        
        this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        
        this.rightWallBody = Bodies.rectangle(this.x + this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        Matter.Body.setAngle(this.rightWallBody, this.angle);

        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);
    }
    
    display(){
       var posB = this.bottomBody.position;
       var posLeft = this.leftWallBody.position;
       var posRight = this.rightWallBody.position;

       
       //left
        push();
        translate (posLeft.x,posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS);

        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();
        
        //right
        push();
        translate (posRight.x,posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS);

        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();

        //bottom
        push();
        translate (posB.x,posB.y);
        rectMode(CENTER);
        angleMode(RADIANS);

        fill(255);
        stroke(255);
        rect(0,0, this.dustbinHeight,this.wallThickness);
        pop();
    }    

}